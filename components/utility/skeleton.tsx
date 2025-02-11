"use client"

import { motion } from "framer-motion"

export function CustomSkeleton() {
  return (
    <div className="w-full space-y-20">
      {/* Hero Skeleton */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SkeletonBlock className="h-16 w-3/4 mx-auto" />
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-5/6 mx-auto" />
          <div className="flex justify-center space-x-4">
            {[...Array(4)].map((_, i) => (
              <SkeletonBlock key={i} className="h-10 w-32" />
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <SkeletonBlock className="h-12 w-48" />
            <SkeletonBlock className="h-12 w-48" />
          </div>
        </div>
      </div>

      {/* Features Skeleton */}
      <div className="container mx-auto px-4">
        <SkeletonBlock className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <SkeletonBlock className="h-12 w-12" />
              <SkeletonBlock className="h-6 w-3/4" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="container mx-auto px-4">
        <SkeletonBlock className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <SkeletonBlock className="h-10 w-24 mx-auto" />
              <SkeletonBlock className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Commands Skeleton */}
      <div className="container mx-auto px-4">
        <SkeletonBlock className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start space-x-4">
              <SkeletonBlock className="h-8 w-8 rounded-full" />
              <div className="flex-1 space-y-2">
                <SkeletonBlock className="h-6 w-1/3" />
                <SkeletonBlock className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Skeleton */}
      <div className="container mx-auto px-4">
        <SkeletonBlock className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <SkeletonBlock className="h-24 w-full" />
              <div className="flex items-center space-x-4">
                <SkeletonBlock className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <SkeletonBlock className="h-4 w-32" />
                  <SkeletonBlock className="h-3 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <motion.div
      className={`bg-purple-800/30 rounded-md ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 1.5,
        ease: "easeInOut",
      }}
    />
  )
}

