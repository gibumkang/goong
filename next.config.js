const path = require('path')
module.exports = {
    images: {
        domains: ['localhost', 'https://via.placeholder.com'],
    },
    webpack: (config) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        return config
    },
    async redirects() {
        return [
            {
                source: '/goong_menu.pdf',
                destination: '/menu',
                permanent: true,
            },
        ]
    },
}
