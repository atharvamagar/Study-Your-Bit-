import { CheckCircle } from "lucide-react"

interface LearningOutcomesProps {
  outcomes: string[]
}

export function LearningOutcomes({ outcomes }: LearningOutcomesProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        What you'll learn
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              {outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 