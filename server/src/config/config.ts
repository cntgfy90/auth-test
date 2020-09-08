export default {
    serverPort: process.env.SERVER_PORT || 3000,
    db: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        options: {
            expiresIn: process.env.JWT_EXP_IN || '1h',
        },
    },
};
