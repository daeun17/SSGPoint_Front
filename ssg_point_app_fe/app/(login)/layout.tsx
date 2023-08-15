import Header from "@/components/layout/Header"
import '../globals.css'
export const metadata = {
  title: '신세계포인트 - 로그인',
  description: '로그인 페이지',
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
        {children}</body>
    </html>
  )
}
