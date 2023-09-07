import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Emmanuel Ogunleye',
  description: 'Made with nextJS and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        </body>
      
    </html>
  )
}
