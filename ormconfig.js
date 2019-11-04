const dotenv =  require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        './src/**/*.entity.ts',
    ],
    migrations: [
        './src/migrations/**/*.ts',
    ],
};