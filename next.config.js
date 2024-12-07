module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*/',
            },
        ]
    },
    skipTrailingSlashRedirect: true,
    // @todo Add strict mode again once https://github.com/PaulLeCam/react-leaflet/issues/1133 is resolved
    reactStrictMode: false
}