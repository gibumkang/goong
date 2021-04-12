module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'goong'),
                username: env('DATABASE_USERNAME', 'goong'),
                password: env('DATABASE_PASSWORD', 'skgoong'),
                schema: env('DATABASE_SCHEMA', 'public'), // Not Required
                ssl: {
                    rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
                },
            },
            options: {
                ssl: env.bool('DATABASE_SSL', false),
            },
        },
    },
})
