import React from "react";

export interface SchoolCrestProps {
  variant?: "default" | "dark" | "gold" | "monochrome";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  xs: "w-7 h-7",
  sm: "w-10 h-10 sm:w-11 sm:h-11",
  md: "w-12 h-12 sm:w-14 sm:h-14",
  lg: "w-16 h-16 sm:w-20 sm:h-20",
  xl: "w-24 h-24 sm:w-28 sm:h-28",
  "2xl": "w-32 h-32 sm:w-36 sm:h-36",
};

export function SchoolCrest({
  variant = "default",
  size = "md",
  className = "",
}: SchoolCrestProps) {
  const sizeClass = sizeMap[size];

  if (variant === "dark") {
    return (
      <div
        className={`relative shrink-0 select-none ${sizeClass} ${className}`}
        aria-label="DRVA Official Seal"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <path id="crest-text-upper-dark" d="M 24,100 A 76,76 0 1,1 176,100" fill="none" />
            <path id="crest-text-lower-dark" d="M 172,108 A 73,73 0 0,1 28,108" fill="none" />
            <path id="crest-ribbon-path-dark" d="M 36,166 Q 100,182 164,166" fill="none" />
          </defs>

          {/* Outer Border */}
          <circle cx="100" cy="100" r="95" stroke="#94A3B8" strokeWidth="2.5" fill="#0C2033" />
          <circle cx="100" cy="100" r="91" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" fill="none" opacity="0.6" />
          <circle cx="100" cy="100" r="88" stroke="#64748B" strokeWidth="1.5" fill="#102A43" />
          <circle cx="100" cy="100" r="62" stroke="#64748B" strokeWidth="1.5" fill="#0C2033" />

          {/* Upper Text */}
          <text
            fontFamily="'Manrope', 'Inter', sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#FFFFFF"
            letterSpacing="0.12em"
          >
            <textPath href="#crest-text-upper-dark" startOffset="50%" textAnchor="middle">
              DEEPER REAL VISION ACADEMY
            </textPath>
          </text>

          {/* Stars */}
          <circle cx="30" cy="98" r="2.5" fill="#38BDF8" />
          <circle cx="170" cy="98" r="2.5" fill="#38BDF8" />

          {/* Lower Text */}
          <text
            fontFamily="'Inter', sans-serif"
            fontSize="8.5"
            fontWeight="700"
            fill="#93C5FD"
            letterSpacing="0.22em"
          >
            <textPath href="#crest-text-lower-dark" startOffset="50%" textAnchor="middle">
              SHERETTI &bull; ABUJA
            </textPath>
          </text>

          {/* Center Circle */}
          <circle cx="100" cy="94" r="50" fill="#102A43" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3,2" />
          <circle cx="100" cy="94" r="46" fill="#0C2033" stroke="#64748B" strokeWidth="1.25" />

          {/* Knowledge Rays */}
          <g stroke="#38BDF8" strokeWidth="0.75" opacity="0.4">
            <line x1="100" y1="53" x2="100" y2="60" />
            <line x1="84" y1="57" x2="88" y2="63" />
            <line x1="116" y1="57" x2="112" y2="63" />
            <line x1="72" y1="68" x2="78" y2="72" />
            <line x1="128" y1="68" x2="122" y2="72" />
          </g>

          {/* Diagonal Pencil */}
          <g transform="rotate(-32 100 92)">
            <rect x="97" y="60" width="6" height="52" fill="#38BDF8" rx="0.5" />
            <line x1="99" y1="60" x2="99" y2="112" stroke="#FFFFFF" strokeWidth="0.75" opacity="0.7" />
            <rect x="97" y="56" width="6" height="4" fill="#94A3B8" />
            <rect x="97" y="52" width="6" height="4" fill="#0C2033" rx="1" />
            <polygon points="97,112 103,112 100,122" fill="#E2E8F0" />
            <polygon points="99,118 101,118 100,122" fill="#0C2033" />
          </g>

          {/* Open Book */}
          <g transform="translate(0, 4)">
            <path
              d="M 100,98 C 92,93 76,91 66,93 C 64,93.4 63,95 63,97 L 63,117 C 73,115 90,117 100,123 Z"
              fill="#1E293B"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <line x1="70" y1="99" x2="94" y2="99" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="70" y1="104" x2="94" y2="104" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="70" y1="109" x2="94" y2="109" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="70" y1="114" x2="90" y2="114" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />

            <path
              d="M 100,98 C 108,93 124,91 134,93 C 136,93.4 137,95 137,97 L 137,117 C 127,115 110,117 100,123 Z"
              fill="#1E293B"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <line x1="106" y1="99" x2="130" y2="99" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="106" y1="104" x2="130" y2="104" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="106" y1="109" x2="130" y2="109" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />
            <line x1="106" y1="114" x2="126" y2="114" stroke="#94A3B8" strokeWidth="0.8" opacity="0.7" />

            <path d="M 100,97 L 100,123" stroke="#E2E8F0" strokeWidth="1.75" strokeLinecap="round" />
            <polygon points="98,122 102,122 100,125" fill="#E2E8F0" />
          </g>

          {/* Ribbon Banner */}
          <g>
            <path d="M 34,166 L 22,160 L 30,174 L 20,186 L 42,178 Z" fill="#0C2033" stroke="#64748B" strokeWidth="1" />
            <path d="M 166,166 L 178,160 L 170,174 L 180,186 L 158,178 Z" fill="#0C2033" stroke="#64748B" strokeWidth="1" />
            <polygon points="40,166 48,166 46,174 38,172" fill="#050D14" />
            <polygon points="160,166 152,166 154,174 162,172" fill="#050D14" />
            <path d="M 38,163 Q 100,177 162,163 L 160,179 Q 100,193 40,179 Z" fill="#0C2033" stroke="#38BDF8" strokeWidth="1.25" />
            <text
              fontFamily="'Manrope', 'Inter', sans-serif"
              fontSize="8.5"
              fontWeight="700"
              fill="#FFFFFF"
              letterSpacing="0.16em"
            >
              <textPath href="#crest-ribbon-path-dark" startOffset="50%" textAnchor="middle">
                IN GOD WE TRUST
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // Default Seal
  return (
    <div
      className={`relative shrink-0 select-none ${sizeClass} ${className}`}
      aria-label="DRVA Official Seal"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <path id="crest-text-upper-default" d="M 24,100 A 76,76 0 1,1 176,100" fill="none" />
          <path id="crest-text-lower-default" d="M 172,108 A 73,73 0 0,1 28,108" fill="none" />
          <path id="crest-ribbon-path-default" d="M 36,166 Q 100,182 164,166" fill="none" />
        </defs>

        {/* Outer Ring Border */}
        <circle cx="100" cy="100" r="95" stroke="#102A43" strokeWidth="2.5" fill="#FFFFFF" />
        <circle cx="100" cy="100" r="91" stroke="#2867B2" strokeWidth="1" strokeDasharray="2,2" fill="none" opacity="0.6" />
        
        {/* Outer Ring Band Fill */}
        <circle cx="100" cy="100" r="88" stroke="#102A43" strokeWidth="1.5" fill="#F7F8FA" />
        <circle cx="100" cy="100" r="62" stroke="#102A43" strokeWidth="1.5" fill="#FFFFFF" />

        {/* Upper Text: DEEPER REAL VISION ACADEMY */}
        <text
          fontFamily="'Manrope', 'Inter', sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#102A43"
          letterSpacing="0.12em"
        >
          <textPath href="#crest-text-upper-default" startOffset="50%" textAnchor="middle">
            DEEPER REAL VISION ACADEMY
          </textPath>
        </text>

        {/* Star Separators */}
        <circle cx="30" cy="98" r="2.5" fill="#2867B2" />
        <circle cx="170" cy="98" r="2.5" fill="#2867B2" />

        {/* Lower Text: SHERETTI • ABUJA */}
        <text
          fontFamily="'Inter', sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#2867B2"
          letterSpacing="0.22em"
        >
          <textPath href="#crest-text-lower-default" startOffset="50%" textAnchor="middle">
            SHERETTI &bull; ABUJA
          </textPath>
        </text>

        {/* Center Core Ring & Background */}
        <circle cx="100" cy="94" r="50" fill="#F7F8FA" stroke="#2867B2" strokeWidth="1" strokeDasharray="3,2" />
        <circle cx="100" cy="94" r="46" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.25" />

        {/* Knowledge Sunbeams */}
        <g stroke="#2867B2" strokeWidth="0.75" opacity="0.35">
          <line x1="100" y1="53" x2="100" y2="60" />
          <line x1="84" y1="57" x2="88" y2="63" />
          <line x1="116" y1="57" x2="112" y2="63" />
          <line x1="72" y1="68" x2="78" y2="72" />
          <line x1="128" y1="68" x2="122" y2="72" />
        </g>

        {/* Diagonal Educational Pencil */}
        <g transform="rotate(-32 100 92)">
          <rect x="97" y="60" width="6" height="52" fill="#2867B2" rx="0.5" />
          <line x1="99" y1="60" x2="99" y2="112" stroke="#FFFFFF" strokeWidth="0.75" opacity="0.7" />
          <rect x="97" y="56" width="6" height="4" fill="#66717D" />
          <rect x="97" y="52" width="6" height="4" fill="#102A43" rx="1" />
          <polygon points="97,112 103,112 100,122" fill="#E4E7EB" />
          <polygon points="99,118 101,118 100,122" fill="#102A43" />
        </g>

        {/* Center Motif: Open Book of Knowledge */}
        <g transform="translate(0, 4)">
          <path
            d="M 100,98 C 92,93 76,91 66,93 C 64,93.4 63,95 63,97 L 63,117 C 73,115 90,117 100,123 Z"
            fill="#FFFFFF"
            stroke="#102A43"
            strokeWidth="1.5"
          />
          <line x1="70" y1="99" x2="94" y2="99" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="70" y1="104" x2="94" y2="104" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="70" y1="109" x2="94" y2="109" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="70" y1="114" x2="90" y2="114" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />

          <path
            d="M 100,98 C 108,93 124,91 134,93 C 136,93.4 137,95 137,97 L 137,117 C 127,115 110,117 100,123 Z"
            fill="#FFFFFF"
            stroke="#102A43"
            strokeWidth="1.5"
          />
          <line x1="106" y1="99" x2="130" y2="99" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="106" y1="104" x2="130" y2="104" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="106" y1="109" x2="130" y2="109" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />
          <line x1="106" y1="114" x2="126" y2="114" stroke="#66717D" strokeWidth="0.8" opacity="0.6" />

          <path d="M 100,97 L 100,123" stroke="#102A43" strokeWidth="1.75" strokeLinecap="round" />
          <polygon points="98,122 102,122 100,125" fill="#102A43" />
        </g>

        {/* Flowing Ribbon Banner: IN GOD WE TRUST */}
        <g>
          <path d="M 34,166 L 22,160 L 30,174 L 20,186 L 42,178 Z" fill="#102A43" stroke="#102A43" strokeWidth="1" />
          <path d="M 166,166 L 178,160 L 170,174 L 180,186 L 158,178 Z" fill="#102A43" stroke="#102A43" strokeWidth="1" />

          <polygon points="40,166 48,166 46,174 38,172" fill="#0C2033" />
          <polygon points="160,166 152,166 154,174 162,172" fill="#0C2033" />

          <path d="M 38,163 Q 100,177 162,163 L 160,179 Q 100,193 40,179 Z" fill="#102A43" stroke="#2867B2" strokeWidth="1.25" />
          
          <text
            fontFamily="'Manrope', 'Inter', sans-serif"
            fontSize="8.5"
            fontWeight="700"
            fill="#FFFFFF"
            letterSpacing="0.16em"
          >
            <textPath href="#crest-ribbon-path-default" startOffset="50%" textAnchor="middle">
              IN GOD WE TRUST
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}
