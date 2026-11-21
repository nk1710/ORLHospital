/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "standalone",
  experimental: {
    cpus: 1,
    workerThreads: false,
    webpackBuildWorker: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "www.drdhirendrasinghkushwah.in",
      },
      {
        protocol: "https",
        hostname: "drdhirendrasinghkushwah.in",
      },
      {
        protocol: "https",
        hostname: "www.drdhirendrasinghkushwah.com",
      },
      {
        protocol: "https",
        hostname: "drdhirendrasinghkushwah.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "drdhirendrasinghkushwah.in",
          },
        ],
        destination: "https://www.drdhirendrasinghkushwah.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.drdhirendrasinghkushwah.in",
          },
        ],
        destination: "https://www.drdhirendrasinghkushwah.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "drdhirendrasinghkushwah.com",
          },
        ],
        destination: "https://www.drdhirendrasinghkushwah.com/:path*",
        permanent: true,
      },
      {
        source: "/specialities/ent-and-gynae-clinic",
        destination: "/",
        permanent: true,
      },
      {
        source: "/head-neck-surgery",
        destination: "/specialities/head-neck-surgery",
        permanent: true,
      },
      {
        source: "/septoplasty",
        destination: "/specialities/septoplasty",
        permanent: true,
      },
      {
        source: "/nose-sinus-rhinology",
        destination: "/specialities/nose-sinus-rhinology",
        permanent: true,
      },
      {
        source: "/mastoidectomy",
        destination: "/specialities/mastoidectomy",
        permanent: true,
      },
      {
        source: "/skull-base-surgery",
        destination: "/specialities/skull-base-surgery",
        permanent: true,
      },
      {
        source: "/stapedotomy",
        destination: "/specialities/stapedotomy-surgery",
        permanent: true,
      },
      {
        source: "/tonsillectomy-surgery",
        destination: "/specialities/tonsillectomy-surgery",
        permanent: true,
      },
      {
        source: "/pediatric-ent",
        destination: "/specialities/pediatric-ent",
        permanent: true,
      },
      {
        source: "/laryngology",
        destination: "/specialities/laryngology",
        permanent: true,
      },
      {
        source: "/conditions/head-neck",
        destination: "/specialities/head-neck-surgery",
        permanent: true,
      },
      {
        source: "/conditions/nose-sinus-treatment",
        destination: "/conditions/nose-sinus",
        permanent: true,
      },
      {
        source: "/conditions/voice-throat",
        destination: "/conditions/voice-throat-disorders-treatment-delhi",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about/drdhirendrasinghkushwah",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/facilities.html",
        destination: "/facilities",
        permanent: true,
      },
      {
        source: "/best-ent-doctor-jasola-delhi.html",
        destination: "/location/jasola",
        permanent: true,
      },
      {
        source: "/best-ent-doctor-cr-park-delhi.html",
        destination: "/location/cr-park",
        permanent: true,
      },
      {
        source: "/best-ent-doctor-south-delhi.html",
        destination: "/location/arjun-nagar",
        permanent: true,
      },
      {
        source: "/best-ent-doctor-palwal-haryana.html",
        destination: "/location/palwal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

