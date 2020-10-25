const HOST = process.env['DATABASE_HOST'];
const USER = process.env['DATABASE_USER'];
const PASSWORD = process.env['DATABASE_PASSWORD'];
const DATABASE = process.env['DATABASE_NAME'];

module.exports = {
  host: HOST,
  type: 'mysql',
  port: 3306,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  entities: ['./dist/src/**/**/*.js'],
  migrations: ['./dist/src/**/**/*.js'],
  cli: {
    migrationsDir: './dist/src/**/**/*.js',
  },
  synchronize: true,
};
