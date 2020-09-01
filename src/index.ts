import express from 'express';
import { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';
import User from './entities/personalData';

// create typeorm connection
createConnection().then((connection) => {
	const app = express();
	const userRepository = connection.getRepository(User);

	// create and setup express app
	app.use(express.json());

	// register routes
	app.get('/user', async function (req, res) {
		console.log('hello');
		res.send(getRepository(User).find());
	});

	app.get('/user/:id', async function (req: Request, res: Response) {
		const result = await userRepository.findOne(req.params.id);
		return res.send(result);
	});

	app.post('/user', async function (req: Request, res: Response) {
		const user = await userRepository.create(req.body);
		const result = await userRepository.save(user);
		return res.send(result);
	});

	app.put('/user/:id', async function (req: Request, res: Response) {
		const user = await userRepository.findOne(req.params.id);
		userRepository.merge(user, req.body);
		const result = await userRepository.save(user);
		return res.send(result);
	});

	app.delete('/user/:id', async function (req: Request, res: Response) {
		const result = await userRepository.delete(req.params.id);
		return res.send(result);
	});

	// start express server
	app.listen(3001);
});
