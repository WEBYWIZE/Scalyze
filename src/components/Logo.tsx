import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-8", light = false }: LogoProps) {
  // Determine text and brand colors
  const strokeColor = light ? "#FFFFFF" : "currentColor";
  const blueColor = "#0066FF"; // High-contrast, premium brand blue from the logo image

  return (
    <svg
      viewBox="0 0 338 52"
      className={`${className} ${light ? "text-white" : "text-slate-900 dark:text-white"} transition-colors duration-300`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* S */}
      <g transform="translate(10, 0)">
        <path
          d="M 33 14 C 33 8, 9 8, 9 20 C 9 28, 33 24, 33 32 C 33 44, 9 44, 9 38"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>

      {/* C */}
      <g transform="translate(56, 0)">
        <path
          d="M 33 14 C 33 8, 9 8, 9 26 C 9 44, 33 44, 33 38"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>

      {/* A (with nested bright blue scaling triangle) */}
      <g transform="translate(102, 0)">
        {/* Outer caret structure of 'A' */}
        <path
          d="M 9 45 L 21 7 L 33 45"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        {/* Intricate solid blue growth chevron nested within the A */}
        <path
          d="M 16 45 L 21 34 L 26 45 Z"
          fill={blueColor}
        />
      </g>

      {/* L */}
      <g transform="translate(148, 0)">
        <path
          d="M 9 7 L 9 45 L 33 45"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>

      {/* Y (with vibrant blue right-leaning branch) */}
      <g transform="translate(194, 0)">
        {/* Left-leaning stem of 'Y' */}
        <path
          d="M 9 7 L 21 23 L 21 45"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        {/* Bright blue right branch */}
        <path
          d="M 21 23 L 33 7"
          stroke={blueColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>

      {/* Z */}
      <g transform="translate(240, 0)">
        <path
          d="M 9 7 L 33 7 L 9 45 L 33 45"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>

      {/* E (with minimalist floating top-bar gap) */}
      <g transform="translate(286, 0)">
        {/* Left vertical, bottom, and middle bars */}
        <path
          d="M 9 7 L 9 45 L 33 45 M 9 26 L 27 26"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        {/* Stylish floating top bar */}
        <path
          d="M 18 7 L 33 7"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </g>
    </svg>
  );
}
