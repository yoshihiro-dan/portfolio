import './globals.css'
// import { Inter } from 'next/font/google'
import { Zen_Kaku_Gothic_New, Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

// const inter = Inter({ subsets: ['latin'] })
const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ["300", "400", "500"],
  variable: "--font-zenkakugothicnew",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: 'Yoshihiro Dan Portfolio',
  description: '檀義弘のポートフォリオです',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${ZenKakuGothicNew.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
