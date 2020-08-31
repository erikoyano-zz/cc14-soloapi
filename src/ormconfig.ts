module.exports = {
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || 5432,
	username: process.env.DB_USER || 'erikoyano',
	database: process.env.DB_NAME || 'user_info',
	entities: ['src/entities/**/*.ts'],
	migrations: ['src/migrations/**/*.ts'],
	seeds: ['src/seeds/**/*.ts'],
	logging: false,
	migrationsRun: false /* Disable auto-run migration */,
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
	},
};
