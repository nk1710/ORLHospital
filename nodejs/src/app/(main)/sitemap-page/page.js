import Link from "next/link";
import { getAllValidPaths } from "@/lib/seo-utils";

export const revalidate = 86400;

export default async function VisualSitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.drdhirendrasinghkushwah.in";

  const paths = await getAllValidPaths();
  const urls = paths.map(({ location, problem, intent }) => (`${baseUrl}/${location}/${problem}/`))

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Visual Sitemap
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {urls.map((url,index) => (
          <div key={index} className="border rounded-lg p-3">
            <Link
              href={url}
              className="text-sm text-teal-700 hover:underline break-words"
            >
              {url}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}