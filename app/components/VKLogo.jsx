"use client";

const VKLogo = ({ isDarkMode, size = "md" }) => {
  const ring     = size === "sm" ? 30 : size === "lg" ? 48 : 36;
  const fontSize = size === "sm" ? 11 : size === "lg" ? 17 : 13;
  const nameSize = size === "sm" ? "text-[14px]" : size === "lg" ? "text-[22px]" : "text-[17px]";

  return (
    <div className="flex items-center gap-3 cursor-pointer select-none">

      {/* Monogram ring */}
      <svg width={ring} height={ring} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="20" cy="20" r="18.5" stroke="#ea580c" strokeWidth="1.5" />
        {/* Inner ring */}
        <circle cx="20" cy="20" r="15.5" stroke="#ea580c" strokeWidth="0.5" strokeOpacity="0.35" />
        {/* VK monogram */}
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize={fontSize}
          letterSpacing="-0.5"
          fill={isDarkMode ? "#ffffff" : "#0f172a"}
        >
          VK
        </text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col gap-[1px] leading-none">
        <span
          className={`font-Outfit font-black tracking-[-0.03em] leading-none ${nameSize}`}
          style={{ color: isDarkMode ? "#ffffff" : "#0f172a" }}
        >
          vipul
        </span>
        <span
          className="font-Outfit font-normal tracking-[0.18em] uppercase leading-none"
          style={{
            fontSize: size === "sm" ? 7 : size === "lg" ? 10 : 8,
            color: "#ea580c",
            letterSpacing: "0.2em",
          }}
        >
          kumar
        </span>
      </div>

    </div>
  );
};

export default VKLogo;
