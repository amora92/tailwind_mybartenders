'use client'

import React, { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border border-gray-200'
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'elevated',
      padding = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mb-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, as: Component = 'h3', className = '', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={`text-xl font-semibold text-gray-900 ${className}`}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-gray-600 mt-1 ${className}`}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = 'CardDescription'

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mt-4 pt-4 border-t border-gray-100 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export default Card
