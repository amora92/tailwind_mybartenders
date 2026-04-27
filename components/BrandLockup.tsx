import React from 'react'
import Logo from './Logo'

interface BrandLockupProps {
  className?: string
  compact?: boolean
  centered?: boolean
}

const BrandLockup = ({
  className = '',
  compact = false,
  centered = false
}: BrandLockupProps) => {
  const markWidth = compact ? 44 : 54
  const markHeight = compact ? 48 : 58
  const wordSize = compact
    ? 'text-sm sm:text-[0.98rem] tracking-[0.18em]'
    : 'text-base sm:text-[1.08rem] tracking-[0.22em]'
  const subSize = compact
    ? 'text-[0.58rem] tracking-[0.3em]'
    : 'text-[0.68rem] tracking-[0.34em]'
  const rootAlignment = centered
    ? 'items-center text-center'
    : 'items-start text-left'
  const dividerAlignment = centered ? 'justify-center' : 'justify-start'
  const badgeSize = compact
    ? 'h-11 w-11 rounded-2xl'
    : 'h-14 w-14 rounded-[1.15rem]'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/15 bg-white/10 shadow-[0_12px_32px_rgba(3,7,18,0.3)] backdrop-blur-sm ${badgeSize}`}
      >
        <Logo
          width={markWidth}
          height={markHeight}
          className='scale-[1.05]'
          alt=''
          priority={compact}
        />
      </span>
      <span className={`flex flex-col leading-none ${rootAlignment}`}>
        <span
          className={[
            'bg-[linear-gradient(135deg,#fff7c7_0%,#f8de7c_22%,#fff0ad_40%,#d8a63a_58%,#fff4c9_76%,#d59621_100%)] bg-clip-text font-extrabold uppercase text-transparent whitespace-nowrap drop-shadow-[0_0_18px_rgba(245,184,74,0.28)]',
            wordSize
          ].join(' ')}
        >
          MyBartenders
        </span>
        <span className={`mt-1.5 flex items-center gap-2 ${dividerAlignment}`}>
          <span className='h-px w-6 bg-gradient-to-r from-transparent via-amber-300/80 to-amber-500/30' />
          <span
            className={`font-medium uppercase text-amber-200/85 whitespace-nowrap ${subSize}`}
          >
            Mobile Cocktail Bar
          </span>
          <span className='h-px w-6 bg-gradient-to-r from-amber-500/30 via-amber-300/80 to-transparent' />
        </span>
      </span>
    </span>
  )
}

export default BrandLockup
