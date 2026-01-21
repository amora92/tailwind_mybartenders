'use client'

import React from 'react'

interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      aria-hidden='true'
    />
  )
}

export const ArticleCardSkeleton = () => {
  return (
    <div className='group' aria-label='Loading article'>
      <div className='overflow-hidden rounded-lg'>
        <Skeleton className='w-full h-48' />
      </div>
      <Skeleton className='mt-4 h-6 w-3/4' />
      <Skeleton className='mt-2 h-4 w-1/2' />
    </div>
  )
}

export const ArticlePageSkeleton = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20'>
      {/* Header */}
      <div className='mb-12'>
        <div className='flex items-center space-x-2 mb-4'>
          <Skeleton className='w-20 h-6 rounded-full' />
          <Skeleton className='w-24 h-4' />
        </div>
        <Skeleton className='h-10 w-3/4 mb-4' />
        <div className='flex items-center space-x-3 pb-6'>
          <Skeleton className='w-10 h-10 rounded-full' />
          <div>
            <Skeleton className='h-4 w-24 mb-2' />
            <Skeleton className='h-3 w-32' />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mb-12'>
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-4 w-5/6' />
      </div>

      {/* Image */}
      <Skeleton className='w-full h-[450px] rounded-lg mb-12' />

      {/* Content */}
      <div className='space-y-4'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-5/6' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-4/6' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  )
}

export const GallerySkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className='aspect-square rounded-lg' />
      ))}
    </div>
  )
}

export const ServiceCardSkeleton = () => {
  return (
    <div className='p-6 rounded-lg border border-gray-200'>
      <Skeleton className='w-12 h-12 rounded-lg mb-4' />
      <Skeleton className='h-6 w-3/4 mb-2' />
      <Skeleton className='h-4 w-full mb-1' />
      <Skeleton className='h-4 w-5/6' />
    </div>
  )
}

export default Skeleton
