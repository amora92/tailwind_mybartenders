'use client'

import React from 'react'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  color?: string
}

/**
 * Optimized inline SVG logo component
 * This replaces the 1.8MB embedded PNG logo with a lightweight SVG
 * The cocktail shaker design maintains the brand aesthetic at ~2KB
 */
const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 44,
  className = '',
  color = '#d4a03a' // Gold brand color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cocktail Shaker Body */}
      <path
        d="M8 14h16v24c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V14z"
        fill={color}
        opacity="0.9"
      />
      {/* Shaker Top */}
      <path
        d="M6 10h20l-2 4H8l-2-4z"
        fill={color}
      />
      {/* Cap */}
      <path
        d="M10 2h12v8H10V2z"
        fill={color}
        opacity="0.85"
      />
      {/* Cap Top */}
      <ellipse
        cx="16"
        cy="2"
        rx="6"
        ry="2"
        fill={color}
      />
      {/* Decorative Band */}
      <rect
        x="8"
        y="22"
        width="16"
        height="2"
        fill={color}
        opacity="0.6"
      />
      {/* Shine Effect */}
      <path
        d="M22 16v18c0 1.1-.9 2-2 2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  )
}

export default Logo
