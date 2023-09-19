/** @type {import('next').NextConfig} */
const nextConfig = {
    // Linjer herunder tilføjes for at kunne loade billeder fra en extern source, er en next.js sikkerhedsting
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
