import { Barlow, Gilda_Display } from "next/font/google";
import "@/app/globals.css";

import FloatingSocials from "@/components/ui/FloatingSocials";
import TopBar from "@/components/home/components/TopBar/TopBar";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import AutoPopupModal from "@/components/ui/AutoPopupModal";
import ChatCTA from "@/components/ui/ChatCTA";
import { GTMScript, GTMNoScript } from "@/components/GTMScript";
import GTMProvider from "@/components/GTMProvider";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  variable: "--font-barlow",
});

const gilda = Gilda_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-gilda",
});

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16" },
    ],
    apple: [
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: [
      "6IevyyztYbzXRViCI2BuMc7oLTS5GqBxQQTRQSN_AR4",
      "YKYIuUZB4kIbBS87Jm9egPfAsKsjQ9PmfMY4jgmhxcc",
    ],
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.5398;77.2831",
    "ICBM": "28.5398, 77.2831",
    "og:place:location:latitude": "28.5355",
    "og:place:location:longitude": "77.2650",
    "business:contact_data:street_address": "South Delhi & Jasola",
    "business:contact_data:locality": "New Delhi",
    "business:contact_data:postal_code": "110025",
    "business:contact_data:country_string": "India",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full max-w-full overflow-x-clip">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* GTM scripts — dataLayer init + container loader */}
        <GTMScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var _chunkHandled = false;
                window.addEventListener('error', function(e) {
                  if (_chunkHandled) return;
                  var msg = (e && e.message) || '';
                  var isChunk = msg.indexOf('chunk') !== -1 ||
                    (e.filename && e.filename.indexOf('_next/static') !== -1);
                  if (isChunk) {
                    _chunkHandled = true;
                    try {
                      var reloaded = sessionStorage.getItem('__chunk_reload');
                      if (!reloaded) {
                        sessionStorage.setItem('__chunk_reload', '1');
                        window.location.reload();
                      } else {
                        sessionStorage.removeItem('__chunk_reload');
                      }
                    } catch(ex) {}
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className={`${barlow.variable} ${gilda.variable} w-full max-w-full overflow-x-clip text-gray-700`}>
        <GTMNoScript />
        <GTMProvider />
        <TopBar />
        <NavBar />
        <main className="w-full items-center pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingSocials />
        {/* <AutoPopupModal /> */}
        <ChatCTA />
      </body>
    </html>
  );
}