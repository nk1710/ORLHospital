
import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"
import { Barlow, Gilda_Display } from "next/font/google";
import "@/app/globals.css";


const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400'],
  variable: '--font-barlow'
})

const gilda = Gilda_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-gilda'
})


export const metadata = {
  title: "CMS",
  description:
    "ENT CMS"
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${gilda.variable} w-full overflow-x-hidden text-gray-700`}>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <Navbar />

            <main className="p-6">
              {children}
            </main>
          </div>

        </div>
      </body>
    </html>
  )
}