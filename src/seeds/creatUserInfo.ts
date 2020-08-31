import { Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
const data = require('./MOCK_DATA.json');
import User from '../entities/personalData';

export class CreateUser implements Seeder {
	public async run(_, connection: Connection): Promise<any> {
		await connection
			.createQueryBuilder()
			.insert()
			.into(User)
			.values(data)
			.execute();
	}
}
