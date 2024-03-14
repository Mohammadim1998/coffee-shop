import AOSInit from '@/utils/aos'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "coffee-shop project with next.js v13",

  icons: {
    icon: "/images/logo-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='ltr'>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
