const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* regular next.js config options here */
  images: {
		domains: ["zos.mypinata.cloud", "atomichub-ipfs.com", "cdn-images-1.medium.com"],
	},
}

module.exports = withPreact(nextConfig)
