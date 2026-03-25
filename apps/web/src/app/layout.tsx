import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'AI-First Template',
  description: 'AI-first monorepo template with Clean Architecture',
}

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
