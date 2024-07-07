

type ActivityCardProps = {}

export default function ActivityCard({}: ActivityCardProps) {
  return (
    <div className="h-48 min-w-48 bg-sky-50 rounded-lg border-gray-300 border-2 p-4">
        <div className="w-full">
            <p className="text-right">4 pm</p>
            <h4 className="text-lg font-medium">Ate</h4>
            <p className="text-sm font-medium">2 spoons consumed</p>
        </div>

    </div>
  )
}