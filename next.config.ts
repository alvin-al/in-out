// /** @type {import('next').NextConfig} */
// import withPWA from 'next-pwa'

// const pwaConfig = withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// });

// module.exports = {
//   ...pwaConfig,
//   reactStrictMode: false,
// };

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  reactStrictMode: false,
  // Your Next.js config
});
