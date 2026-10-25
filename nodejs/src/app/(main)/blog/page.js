
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";

export const revalidate = 60;


export async function generateMetadata() {
  return {
    title: "Best ENT Doctor Blog in India | Dr. Dhirendra Singh kushwah",
    description:
      "Read expert ENT health tips, insights, and advice from Dr. Dhirendra Singh kushwah, one of India’s top ENT specialists. Learn about ear, nose, throat care, treatments, surgeries, and patient experiences.",
    keywords: [
      "ENT Blog India",
      "Best ENT Doctor India",
      "ENT Health Tips",
      "Ear, Nose, Throat Care",
      "Skull Base Surgery",
      "Cochlear Implant",
      "ENT Treatments",
      "ENT Specialist Advice"
    ],
    authors: [{ name: "Dr. Dhirendra Singh kushwah" }],
    alternates: {
      canonical: "https://www.drdhirendrasinghkushwah.in/blog.html",
    },
    openGraph: {
      title: "Best ENT Doctor Blog in India | Dr. Dhirendra Singh kushwah",
      description:
        "Explore ENT health insights and advice from Dr. Dhirendra Singh kushwah, one of India’s top ENT specialists. Stay informed about treatments, surgeries, and patient care.",
      url: "https://www.drdhirendrasinghkushwah.in/blog.html",
      siteName: "Dr Dhirendra Singh kushwah ENT Blog",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best ENT Doctor Blog in India | Dr. Dhirendra Singh kushwah",
      description:
        "Expert ENT health tips, insights, and advice by Dr. Dhirendra Singh kushwah. Learn about ear, nose, throat care, treatments, surgeries, and patient experiences.",
    },
  };
}

export default async function BlogPage({ params }) {
  const blogs = await getAllBlogs();
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "alternateName": "Best ENT Surgeon in Delhi",
        "image": "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",
        "medicalSpecialty": "Otolaryngology",
        "jobTitle": "ENT Surgeon",
        "telephone": "+91-9311449825",
        "priceRange": "₹₹₹",
        "url": "https://www.drdhirendrasinghkushwah.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park-110019",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.540381",
          "longitude": "77.247059"
        },
        "sameAs": [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "18:00",
            "closes": "20:00"
          }
        ],
        "areaServed": {
          "@type": "City",
          "name": "Delhi"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional",
            "educationalLevel": "MBBS / ENT Specialization"
          }
        ],
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "ENT Consultation",
            "description": "Comprehensive diagnosis and treatment for ear, nose, and throat conditions."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Cochlear Implant Surgery",
            "description": "Advanced cochlear and hearing implant surgery for children and adults."
          },
          {
            "@type": "MedicalProcedure",
            "name": "Septoplasty Surgery",
            "description": "Pain-free pack-less septoplasty for correction of deviated nasal septum."
          }
        ]
      },
      {
        "@type": "WebSite",
        "url": "https://www.drdhirendrasinghkushwah.in/",
        "name": "Dr. Dhirendra Singh Kushwah - ENT & Gynae Clinic",
        "publisher": {
          "@type": "Physician",
          "name": "Dr. Dhirendra Singh Kushwah"
        }
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="w-full items-center">
        <div className="max-w-7xl px-4 mx-auto py-8">

          <div className="w-full text-center py-4">
            <h1 className="text-3xl md:text-4xl text-teal-600">Latest Blogs</h1>
          </div>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {blogs.map((blog) => (
                <div key={blog.slug} className="shadow rounded-xl overflow-hidden">

                  <div className="relative">
                    <img
                      src={
                        blog.featured_image
                          ? (blog.featured_image.startsWith('/') ? blog.featured_image : `/${blog.featured_image}`)
                          : "/images/fallback.jpg"
                      }
                      alt={blog.title}
                      width={500}
                      height={147}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {blog.featured && (
                      <div className="absolute bg-white/70 rounded-full py-1 px-2 z-10 top-2 right-4 text-sm">Featured</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="blog-date text-teal-600 py-2">
                      Published {new Date(blog.created_at).toLocaleDateString()}
                    </div>
                    <h3 className="blog-title py-2">
                      {blog.title}
                    </h3>
                    <p className="blog-excerpt py-2">
                      {blog.excerpt}
                    </p>
                    <Link href={`/blog/${blog.slug}`}>
                      <p className="inline-block text-teal-600 transition">Read more →</p>
                    </Link>
                  </div>

                </div>
              ))}

            </div>
          )}
        </div>
      </section>
    </>
  );
}