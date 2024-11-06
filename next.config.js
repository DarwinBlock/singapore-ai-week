/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		domains: ["week.token2049.com", "storage.tally.so"],
	},
};

module.exports = nextConfig;
