import { Suspense } from 'react'
import { AnalysisReportContent } from './content'

export const dynamic = 'force-dynamic'

export default function AnalysisReport() {
  return (
    <Suspense>
      <AnalysisReportContent />
    </Suspense>
  )
}
