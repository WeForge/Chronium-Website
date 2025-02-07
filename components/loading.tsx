import { CustomSkeleton } from "./skeleton"

export default function Loading() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <CustomSkeleton />
    </div>
  )
}

