const path = require('path')
module.exports = {
    env: {
        BASE_URL: 'https://studiokanvas-goong.herokuapp.com',
        API_URL: 'https://studiokanvas-goong.herokuapp.com/graphql',
        NEXT_PUBLIC_API_URL: 'http://localhost:1337',
    },
    images: {
        domains: ['localhost', 'https://via.placeholder.com', 'goonglasvegas.com'],
    },
    webpack: (config) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        return config
    },
    target: 'serverless'
}
