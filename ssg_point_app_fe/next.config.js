/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.shinsegaepoint.com',
      'mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com',
      'storage.googleapis.com'
    ],
  },
}

module.exports = nextConfig;
