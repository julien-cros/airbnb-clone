// const { env } = require('eslint-config-next')

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['links.papareact.com']
	},
  reactStrictMode: true,
  env: {
	  mapbox_key:'pk.eyJ1IjoianVsaWVuY3JvcyIsImEiOiJjbGxkdjhzOXAwZ3FtM3Fuemt0bDF5am5lIn0.p-hm7udcbIqzgq62DqMr8g'
  },
}

module.exports = nextConfig
