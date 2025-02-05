import "../globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Chronium | Home",
  description: "Manage your Discord server with Chronium",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <div className="Root">
        {children}
      </div>
    </body>
  )
}