import {
  profile,
  education,
  experience,
  projects,
  skills,
  hackathons,
  certifications,
  navigationMap,
} from "../data/portfolioKnowledge";

// ─────────────────────────────────────────────
// TEXT NORMALIZER
// ─────────────────────────────────────────────

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter((t) => t.length > 1);
}

// ─────────────────────────────────────────────
// INTENT PATTERNS  (weighted keyword sets)
// ─────────────────────────────────────────────

const INTENT_PATTERNS = [
  {
    name: "resume",
    weight: 4,
    keywords: ["resume", "cv", "download", "pdf", "curriculum vitae"],
  },
  {
    name: "contact",
    weight: 3,
    keywords: ["contact", "reach", "email", "phone", "whatsapp", "connect", "hire", "message", "dm", "talk to"],
  },
  {
    name: "education",
    weight: 3,
    keywords: ["education", "study", "studying", "college", "university", "vit", "vellore", "degree", "btech", "b tech", "gpa", "cgpa", "grade", "course", "coursework", "academics", "major", "semester", "year"],
  },
  {
    name: "hackathons",
    weight: 3,
    keywords: ["hackathon", "hackathons", "hack", "competition", "compete", "competed", "smart india", "sia", "space hackathon", "code for bharat", "elixir"],
  },
  {
    name: "certifications",
    weight: 3,
    keywords: ["certificate", "certificates", "certification", "certifications", "certified", "coursera", "achievement", "achievements", "deeplearning", "stanford", "ml specialization"],
  },
  {
    name: "experience",
    weight: 2,
    keywords: ["experience", "work", "worked", "working", "internship", "internships", "intern", "job", "company", "companies", "role", "position", "career", "professional", "kreditbee", "markmyad", "mark my ad", "jurident", "bluestock", "valsco"],
  },
  {
    name: "projects",
    weight: 2,
    keywords: ["project", "projects", "built", "build", "developed", "created", "made", "app", "application", "apps", "portfolio", "shoporia", "food ordering", "eclipse", "tesla", "lazarev", "agriinspect", "agri", "vehicle detection", "resume builder", "sales prediction", "contact management"],
  },
  {
    name: "skills",
    weight: 2,
    keywords: ["skill", "skills", "technology", "technologies", "tech", "stack", "programming", "language", "languages", "framework", "frameworks", "tool", "tools", "know", "expertise", "proficient", "frontend", "backend", "fullstack", "full stack", "python", "react", "javascript", "node", "database", "ai", "ml", "machine learning", "computer vision", "yolo", "tensorflow"],
  },
  {
    name: "about",
    weight: 2,
    keywords: ["about", "who", "yourself", "introduce", "bio", "background", "summary", "overview", "vipul", "tell me about", "who is"],
  },
  {
    name: "navigate",
    weight: 2,
    keywords: ["go to", "navigate", "take me", "show section", "scroll to", "open section", "jump to"],
  },
];

// ─────────────────────────────────────────────
// INTENT DETECTION
// ─────────────────────────────────────────────

function detectIntent(message, ctx) {
  const norm = normalizeText(message);
  const scores = {};

  INTENT_PATTERNS.forEach(({ name, weight, keywords }) => {
    let score = 0;
    keywords.forEach((kw) => {
      if (norm.includes(kw)) score += weight;
    });
    scores[name] = score;
  });

  // Boost with conversation context
  if (ctx.lastIntent === "experience" && /\b(what|did|built|do|responsibilities|role|technology)\b/.test(norm)) {
    scores.experience = (scores.experience || 0) + 3;
  }
  if (ctx.lastIntent === "projects" && /\b(what|tech|technology|how|built with|stack|more|another)\b/.test(norm)) {
    scores.projects = (scores.projects || 0) + 2;
  }
  if (ctx.lastProject && /\b(technology|tech|stack|built with|what did|how)\b/.test(norm)) {
    scores.skills = (scores.skills || 0) + 3;
  }

  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return "general";
  return Object.keys(scores).find((k) => scores[k] === maxScore) || "general";
}

// ─────────────────────────────────────────────
// ENTITY EXTRACTION
// ─────────────────────────────────────────────

function extractEntities(message) {
  const norm = normalizeText(message);
  const entities = { companies: [], projects: [], technologies: [], categories: [] };

  experience.forEach((exp) => {
    if (exp.aliases.some((alias) => norm.includes(alias))) {
      entities.companies.push(exp.id);
    }
  });

  projects.forEach((proj) => {
    if (proj.aliases.some((alias) => norm.includes(alias))) {
      entities.projects.push(proj.id);
    }
  });

  if (/\b(full.?stack|fullstack|mern)\b/.test(norm)) entities.categories.push("fullstack");
  if (/\b(ai|ml|machine learning|computer vision|deep learning|neural)\b/.test(norm)) entities.categories.push("ai");
  if (/\b(frontend|front.?end|ui|ux|react|html|css)\b/.test(norm)) entities.categories.push("frontend");

  const techKeywords = ["react", "next", "nextjs", "node", "python", "yolo", "tensorflow", "mongodb", "postgresql", "fastapi", "express", "javascript", "java", "langchain", "openai", "xgboost", "scikit", "opencv", "gsap", "tailwind"];
  techKeywords.forEach((tech) => {
    if (norm.includes(tech)) entities.technologies.push(tech);
  });

  return entities;
}

// ─────────────────────────────────────────────
// KNOWLEDGE SEARCH
// ─────────────────────────────────────────────

function searchProjects(query, entities) {
  const norm = normalizeText(query);
  return projects
    .map((proj) => {
      let score = 0;
      if (entities.projects.includes(proj.id)) score += 10;
      proj.aliases.forEach((alias) => { if (norm.includes(alias)) score += 5; });
      if (entities.categories.includes(proj.category)) score += 3;
      entities.technologies.forEach((tech) => {
        if (proj.technologies.some((t) => t.toLowerCase().includes(tech))) score += 3;
      });
      const descWords = tokenize(proj.description);
      tokenize(query).forEach((t) => { if (descWords.includes(t)) score += 0.3; });
      return { ...proj, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score);
}

function searchExperience(query, entities) {
  const norm = normalizeText(query);
  return experience
    .map((exp) => {
      let score = 0;
      if (entities.companies.includes(exp.id)) score += 10;
      exp.aliases.forEach((alias) => { if (norm.includes(alias)) score += 5; });
      entities.technologies.forEach((tech) => {
        if (exp.technologies.some((t) => t.toLowerCase().includes(tech))) score += 2;
      });
      return { ...exp, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score);
}

function findSkill(techName) {
  const norm = techName.toLowerCase();
  for (const [, catData] of Object.entries(skills)) {
    const found = catData.items.find(
      (item) => item.toLowerCase().includes(norm) || norm.includes(item.toLowerCase())
    );
    if (found) return { category: catData.name, skill: found };
  }
  return null;
}

function detectNavigationTarget(norm) {
  for (const [key, sectionId] of Object.entries(navigationMap)) {
    if (norm.includes(key)) return { label: key, sectionId };
  }
  return null;
}

// ─────────────────────────────────────────────
// RESPONSE GENERATORS
// ─────────────────────────────────────────────

function makeAboutResponse() {
  return {
    type: "about",
    intro: profile.bio,
    currentRole: profile.currentRole,
    location: profile.location,
    availability: profile.availability,
    suggestions: ["Featured Projects", "Technical Stack", "Experience", "Education", "Contact"],
  };
}

function makeEducationResponse() {
  return {
    type: "education",
    data: education,
    suggestions: ["GPA", "Courses Taken", "Activities", "Certifications"],
  };
}

function makeSkillsResponse(entities, specificTech) {
  if (specificTech) {
    const match = findSkill(specificTech);
    if (match) {
      return {
        type: "skill_check",
        skill: match.skill,
        category: match.category,
        content: `Yes! **${match.skill}** is one of Vipul's skills under **${match.category}**. He uses it actively across projects and internships.`,
        suggestions: ["All Skills", "AI/ML Skills", "Frontend Stack", "Backend Stack", "Projects"],
      };
    }
    return {
      type: "text",
      content: `I couldn't find **${specificTech}** listed in Vipul's skill set. You can ask about his skills, or browse projects to see what he's built with.`,
      suggestions: ["All Skills", "Projects", "Experience"],
    };
  }
  return {
    type: "skills",
    intro: "Here's Vipul's complete technical stack, organized by category:",
    categories: skills,
    suggestions: ["AI/ML Skills", "Frontend Stack", "Backend Stack", "Projects", "Experience"],
  };
}

function makeExperienceListResponse() {
  return {
    type: "experience_list",
    intro: `Vipul has ${experience.length} professional internship experiences:`,
    experiences: experience,
    suggestions: ["KreditBee", "MarkMyAd", "Bluestock Fintech", "Projects"],
  };
}

function makeExperienceDetailResponse(exp) {
  return {
    type: "experience_detail",
    experience: exp,
    suggestions: ["Technologies Used", "Other Internships", "Projects", "Skills"],
  };
}

function makeProjectListResponse(filtered, intro) {
  return {
    type: "project_list",
    intro: intro || `Here are ${filtered.length} of Vipul's projects:`,
    projects: filtered,
    suggestions: ["AI Projects", "Full-Stack", "Frontend", "View GitHub"],
  };
}

function makeProjectDetailResponse(proj) {
  return {
    type: "project_detail",
    project: proj,
    suggestions: ["Technologies Used", "More Projects", "AI Projects", "Full-Stack"],
  };
}

function makeHackathonsResponse() {
  return {
    type: "hackathons",
    intro: `Vipul has participated in ${hackathons.length} hackathons and competitions:`,
    hackathons,
    suggestions: ["Smart India Hackathon", "Certifications", "Projects", "Experience"],
  };
}

function makeCertificationsResponse() {
  return {
    type: "certifications",
    intro: `Vipul holds ${certifications.length} verified certifications:`,
    certifications,
    suggestions: ["ML Specialization", "Education", "Projects", "Experience"],
  };
}

function makeContactResponse() {
  return {
    type: "contact",
    data: {
      email: profile.email,
      phone: profile.phone,
      whatsapp: profile.whatsapp,
      github: profile.github,
      linkedin: profile.linkedin,
      location: profile.location,
      availability: profile.availability,
    },
    suggestions: ["Download Resume", "GitHub", "LinkedIn", "Projects"],
  };
}

function makeResumeResponse() {
  return {
    type: "resume",
    url: profile.resume,
    content: "Vipul's resume is available for download. It covers his education, internships, projects, and technical skills.",
    suggestions: ["Experience", "Projects", "Skills", "Contact"],
  };
}

function makeNavigateResponse(target) {
  return {
    type: "navigate",
    label: target.label,
    sectionId: target.sectionId,
    content: `Sure! Let me take you to the **${target.label}** section.`,
    suggestions: ["About Vipul", "Projects", "Contact", "Skills"],
  };
}

function makeFallbackResponse() {
  return {
    type: "fallback",
    content: "I couldn't find that specific information in Vipul's portfolio. Try asking about his projects, skills, experience, education, hackathons, or contact details.",
    suggestions: ["About Vipul", "Featured Projects", "Technical Stack", "Experience", "Contact"],
  };
}

// ─────────────────────────────────────────────
// SPECIAL SHORT-CIRCUIT HANDLERS
// ─────────────────────────────────────────────

function handleGreeting(norm) {
  if (/^(hi|hello|hey|howdy|greetings|sup|yo|hii|helo)[\s!?.]*$/.test(norm)) {
    return {
      type: "text",
      content: "Hey there! 👋 I'm **Vipul AI**. Ask me anything about Vipul's projects, skills, internships, education, or how to get in touch!",
      suggestions: ["About Vipul", "Featured Projects", "Technical Stack", "Experience", "Contact"],
    };
  }
  return null;
}

function handleThanks(norm) {
  if (/^(thanks|thank you|thank you so much|thx|ty|cheers|appreciate it)[\s!?.]*$/.test(norm)) {
    return {
      type: "text",
      content: "You're welcome! 😊 Feel free to keep exploring Vipul's portfolio. Is there anything else you'd like to know?",
      suggestions: ["About Vipul", "Featured Projects", "Technical Stack", "Contact"],
    };
  }
  return null;
}

function handleSkillCheck(norm, entities) {
  // "Do you know Python?" / "Have you used FastAPI?" / "Can you work with YOLO?"
  if (/\b(know|use|used|work with|experienced|proficient|familiar)\b/.test(norm) && entities.technologies.length > 0) {
    return makeSkillsResponse(entities, entities.technologies[0]);
  }
  return null;
}

function handleGPA(norm) {
  if (/\b(gpa|cgpa|grade|marks|score)\b/.test(norm)) {
    return {
      type: "text",
      content: `Vipul's current **GPA is ${education.gpa}** at VIT Vellore, pursuing **B.Tech in Computer Science and Engineering (Core)**, graduating in 2027.`,
      suggestions: ["Courses Taken", "Activities", "Certifications", "Projects"],
    };
  }
  return null;
}

function handleCurrentRole(norm) {
  if (/\b(current|now|currently|present|today|latest)\b/.test(norm) && /\b(role|job|work|intern|company|doing)\b/.test(norm)) {
    const current = experience.filter((e) => e.type === "current");
    return {
      type: "experience_list",
      intro: "Vipul is currently working at:",
      experiences: current,
      suggestions: ["KreditBee", "MarkMyAd", "All Experience", "Projects"],
    };
  }
  return null;
}

// ─────────────────────────────────────────────
// MAIN ENGINE
// ─────────────────────────────────────────────

export function processMessage(message, ctx = getInitialContext()) {
  const norm = normalizeText(message);
  if (!norm) return { response: makeFallbackResponse(), context: ctx };

  // Short-circuit handlers
  const greeting = handleGreeting(norm);
  if (greeting) return { response: greeting, context: { ...ctx, lastIntent: "general" } };

  const thanks = handleThanks(norm);
  if (thanks) return { response: thanks, context: ctx };

  const entities = extractEntities(message);

  const gpaCheck = handleGPA(norm);
  if (gpaCheck) return { response: gpaCheck, context: { ...ctx, lastIntent: "education" } };

  const currentCheck = handleCurrentRole(norm);
  if (currentCheck) return { response: currentCheck, context: { ...ctx, lastIntent: "experience" } };

  const skillCheck = handleSkillCheck(norm, entities);
  if (skillCheck) return { response: skillCheck, context: { ...ctx, lastIntent: "skills" } };

  const intent = detectIntent(message, ctx);
  let response;
  let newCtx = { ...ctx, lastIntent: intent };

  switch (intent) {
    case "about":
      response = makeAboutResponse();
      break;

    case "education":
      response = makeEducationResponse();
      break;

    case "skills": {
      // Context: if last project, answer "what tech" for that project
      if (ctx.lastProject && /\b(technology|tech|stack|built with|what|used)\b/.test(norm)) {
        const proj = projects.find((p) => p.id === ctx.lastProject);
        if (proj) {
          response = {
            type: "text",
            content: `**${proj.name}** was built using:\n**${proj.technologies.join(", ")}**`,
            suggestions: ["View Project", "More Projects", "All My Skills", "Experience"],
          };
          break;
        }
      }
      // Context: if last company, answer "what tech" for that experience
      if (ctx.lastCompany && /\b(technology|tech|stack|used)\b/.test(norm)) {
        const exp = experience.find((e) => e.id === ctx.lastCompany);
        if (exp) {
          response = {
            type: "text",
            content: `At **${exp.company}**, Vipul worked with:\n**${exp.technologies.join(", ")}**`,
            suggestions: ["Other Internships", "All Skills", "Projects"],
          };
          break;
        }
      }
      // Category-specific
      if (/\b(ai|ml|machine learning|computer vision)\b/.test(norm)) {
        response = {
          type: "skills",
          intro: "Here are Vipul's **AI / ML & Data Science** skills:",
          categories: { aiMl: skills.aiMl },
          suggestions: ["AI Projects", "Experience", "All Skills"],
        };
      } else if (/\b(frontend|front.?end|ui)\b/.test(norm)) {
        response = {
          type: "skills",
          intro: "Here are Vipul's **Frontend** technologies:",
          categories: { frontend: skills.frontend },
          suggestions: ["Backend Stack", "Full-Stack Projects", "All Skills"],
        };
      } else if (/\b(backend|back.?end|server|api)\b/.test(norm)) {
        response = {
          type: "skills",
          intro: "Here are Vipul's **Backend** technologies:",
          categories: { backend: skills.backend, databases: skills.databases },
          suggestions: ["Frontend Stack", "Projects", "All Skills"],
        };
      } else {
        response = makeSkillsResponse(entities, null);
      }
      break;
    }

    case "experience": {
      const expResults = searchExperience(message, entities);
      if (expResults.length > 0) {
        response = makeExperienceDetailResponse(expResults[0]);
        newCtx.lastCompany = expResults[0].id;
      } else if (ctx.lastCompany && /\b(what|did|built|do|responsibilities|built|technology)\b/.test(norm)) {
        const exp = experience.find((e) => e.id === ctx.lastCompany);
        if (exp) {
          response = makeExperienceDetailResponse(exp);
          newCtx.lastCompany = exp.id;
        } else {
          response = makeExperienceListResponse();
        }
      } else {
        response = makeExperienceListResponse();
      }
      break;
    }

    case "projects": {
      const projResults = searchProjects(message, entities);
      if (projResults.length > 0 && entities.projects.length > 0) {
        // Specific project asked
        response = makeProjectDetailResponse(projResults[0]);
        newCtx.lastProject = projResults[0].id;
      } else if (projResults.length > 0) {
        // Filtered list
        const catLabel = entities.categories[0];
        const intro = catLabel
          ? `Here are Vipul's **${catLabel === "ai" ? "AI / ML" : catLabel === "fullstack" ? "Full-Stack" : "Frontend"}** projects:`
          : `Here are Vipul's top matching projects:`;
        response = makeProjectListResponse(projResults.slice(0, 6), intro);
      } else {
        response = makeProjectListResponse(projects.slice(0, 6), "Here are some of Vipul's featured projects:");
      }
      break;
    }

    case "hackathons":
      response = makeHackathonsResponse();
      break;

    case "certifications":
      response = makeCertificationsResponse();
      break;

    case "contact":
      response = makeContactResponse();
      break;

    case "resume":
      response = makeResumeResponse();
      break;

    case "navigate": {
      const target = detectNavigationTarget(norm);
      if (target) {
        response = makeNavigateResponse(target);
      } else {
        response = makeFallbackResponse();
      }
      break;
    }

    default: {
      // Context-based fallback resolution
      if (ctx.lastCompany) {
        const exp = experience.find((e) => e.id === ctx.lastCompany);
        if (exp) {
          response = makeExperienceDetailResponse(exp);
          break;
        }
      }
      if (ctx.lastProject) {
        const proj = projects.find((p) => p.id === ctx.lastProject);
        if (proj) {
          response = makeProjectDetailResponse(proj);
          break;
        }
      }
      response = makeFallbackResponse();
    }
  }

  return { response, context: newCtx };
}

// ─────────────────────────────────────────────
// PUBLIC API HELPERS
// ─────────────────────────────────────────────

export function getInitialContext() {
  return {
    lastIntent: null,
    lastProject: null,
    lastCompany: null,
    messageCount: 0,
  };
}

export function getInitialSuggestions() {
  return ["About Vipul", "Featured Projects", "Technical Stack", "Experience", "Education", "Contact"];
}

// Maps chip labels → natural language queries fed back into the engine
export const CHIP_QUERIES = {
  "About Vipul": "Tell me about Vipul",
  "Featured Projects": "Show me featured projects",
  "Technical Stack": "What is your technical stack?",
  "All Skills": "What are all your skills?",
  "AI/ML Skills": "What are your AI and machine learning skills?",
  "Frontend Stack": "What frontend technologies do you use?",
  "Backend Stack": "What backend technologies do you use?",
  "Experience": "Tell me about your work experience",
  "All Internships": "Tell me about all your internships",
  "Education": "Where do you study?",
  "GPA": "What is your GPA?",
  "Courses Taken": "What courses have you taken?",
  "Activities": "What activities are you involved in?",
  "Certifications": "Show me your certifications",
  "Hackathons": "Have you participated in hackathons?",
  "Contact": "How can I contact Vipul?",
  "Download Resume": "Show me the resume",
  "GitHub": "Show me Vipul's GitHub",
  "LinkedIn": "Show me Vipul's LinkedIn",
  "AI Projects": "Show me AI and machine learning projects",
  "Full-Stack": "Show me full-stack projects",
  "Frontend": "Show me frontend projects",
  "View GitHub": "Show me GitHub",
  "More Projects": "Show me more projects",
  "Technologies Used": "What technologies did you use?",
  "Other Internships": "Tell me about all your internships",
  "KreditBee": "Tell me about KreditBee",
  "MarkMyAd": "Tell me about MarkMyAd",
  "Bluestock Fintech": "Tell me about Bluestock Fintech",
  "Smart India Hackathon": "Tell me about Smart India Hackathon",
  "ML Specialization": "Tell me about your Machine Learning Specialization",
  "Projects": "Show me your projects",
  "Skills": "What are your skills?",
  "View Project": "Tell me more about this project",
};
