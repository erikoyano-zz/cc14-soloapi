import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_info' })
class User {
	@PrimaryColumn()
	public id: number;

	@Column()
	public first_name: string;

	@Column()
	public last_name: string;

	@Column()
	public gender: string;

	@Column()
	public email: string;

	@Column()
	public company: string;

	@Column()
	public job_title: string;

	@Column()
	public country: string;

	@Column()
	public image: string;
}

export default User;
