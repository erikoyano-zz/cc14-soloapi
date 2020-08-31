import { Request, Response } from 'express';
import User from '../entities/personalData';
import { getManager } from 'typeorm';

class Controller {
	constructor() {}
	public async addUser(req: Request, res: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// create a real post object from post json object sent over http
		const newPost = userRepository.create(req.body);

		// save received post
		await userRepository.save(newPost);

		// return saved post back

		res.send(newPost);
	}

	public async getById(req: Request, res: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// get by Id
		const user = await userRepository.findOne(req.params.id);

		// if post was not found return 404 to the client
		if (!user) {
			res.status(404);
			res.end();
			return;
		}

		// return loaded post
		res.send(user);
	}

	public async getAllUser(request: Request, response: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// get all
		const user = await userRepository.find();
		console.log(user, 'hello');
		// return loaded member
		response.send(user);
	}

	public async deleteUser(req: Request, res: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// delete by id
		const user = await userRepository.delete(req.params.id);

		// return loaded member
		res.send(user);
	}

	public async updateUser(req: Request, res: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		//update
		const user = await userRepository.findOne(req.params.id);
		user.first_name = req.body.first_name;
		user.last_name = req.body.last_name;
		user.email = req.body.email;
		user.gender = req.body.gender;
		user.company = req.body.company;
		user.job_title = req.body.job_title;

		await userRepository.save(user);
		// return loaded member
		res.send(user);
	}
}
export { Controller };
