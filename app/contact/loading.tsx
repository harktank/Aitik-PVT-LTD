import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-lg font-medium text-[#0a0a5e]">Loading Contact Page...</p>
      </div>
    </div>
  )
}
