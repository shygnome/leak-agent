import { Suspense } from 'react'
import { ComparisonReportContent } from './content'

export const dynamic = 'force-dynamic'

export default function ComparisonReport() {
  return (
    <Suspense>
      <ComparisonReportContent />
    </Suspense>
  )
}
