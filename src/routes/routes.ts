import { Request, Response, Router } from 'express';
import { Controller } from '../controller/controller';
import User from '../entities/personalData';
import { getManager } from 'typeorm';

class Routes {
	private controller: Controller;
	public router: Router;

	constructor() {
		this.controller = new Controller();
		this.router = this.createRouter();
	}

	public createRouter(): Router {
		const router = Router();

		router.get('/:userId', this.controller.getById);
		router.get('/user', this.controller.getAllUser);
		router.post('/:addUser', this.controller.addUser);
		router.patch('/:userId', this.controller.updateUser);
		router.delete('/:userId', this.controller.deleteUser);

		return router;
	}

	//getAllUser
	public async getAllUser(request: Request, response: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// get all
		const user = await userRepository.find();
		console.log(user, 'hello');
		// return allUser
		response.send(user);
	}

	//add User
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

	// get by ID
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

	//Delete user
	public async deleteUser(req: Request, res: Response) {
		// get a post repository to perform operations with post
		const userRepository = getManager().getRepository(User);

		// delete by id
		const user = await userRepository.delete(req.params.id);

		// return loaded member
		res.send(user);
	}

	// Update User
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

export { Routes };
