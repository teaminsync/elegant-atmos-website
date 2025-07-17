"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function ScrollRestorationContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Removed window.scrollTo(0, 0) to allow Lenis to handle in-page scrolling
    // Lenis's own useEffect in smooth-scroll.tsx handles scroll to top on route changes.
  }, [pathname, searchParams])

  return null
}

export default function ScrollRestoration() {
  return (
    <Suspense fallback={null}>
      <ScrollRestorationContent />
    </Suspense>
  )
}
