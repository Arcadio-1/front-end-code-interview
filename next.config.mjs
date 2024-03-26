/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Arcadio-1/test-blogposts/orgin/images/**",
      },
    ],
  },
};
export default nextConfig;
