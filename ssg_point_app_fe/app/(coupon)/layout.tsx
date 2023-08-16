import Header from "@/components/layout/Header"
import '../globals.css'
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: '신세계포인트 - 쿠폰',
  description: '쿠폰 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
