'use client'

import React, { HTMLAttributes, Ref } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  ref?: Ref<HTMLDivElement>
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

export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
  ref,
  ...props
}: CardProps) {
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

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
}

export function CardHeader({ children, className = '', ref, ...props }: CardHeaderProps) {
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

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  ref?: Ref<HTMLHeadingElement>
}

export function CardTitle({ children, as: Component = 'h3', className = '', ref, ...props }: CardTitleProps) {
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

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>
}

export function CardDescription({ children, className = '', ref, ...props }: CardDescriptionProps) {
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

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
}

export function CardBody({ children, className = '', ref, ...props }: CardBodyProps) {
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

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
}

export function CardFooter({ children, className = '', ref, ...props }: CardFooterProps) {
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

export default Card
