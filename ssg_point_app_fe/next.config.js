/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.shinsegaepoint.com',
      'storage.cloud.google.com',
      'mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com'
    ],
  },
}

module.exports = nextConfig;
