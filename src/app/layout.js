import "./globals.css"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Cafe Leads",
  description: "Cafe & Grill Restaurant",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/daffiys" rel="stylesheet" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  )
}