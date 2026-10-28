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
    ],
  },
  async redirects() {
    return [
      {
        source: "/specialities/ent-and-gynae-clinic",
        destination: "/",
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

