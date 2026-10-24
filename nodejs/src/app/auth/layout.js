
import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"
import { Barlow, Gilda_Display } from "next/font/google";
import "@/app/globals.css";


const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300','400'],
  variable: '--font-barlow'
})

const gilda = Gilda_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-gilda'
})


export const metadata = {
  title: "Login ENT CMS",
  description:
    "CMS for ENT Content"
}

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${gilda.variable} w-full overflow-x-hidden text-gray-700`}>
  
       

        <main className="p-6">
          {children}
        </main>
    
    </body>
    </html>
  )
}