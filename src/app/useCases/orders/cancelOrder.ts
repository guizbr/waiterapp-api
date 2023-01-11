import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
	try {
		const { orderID } = req.params;

		await Order.findByIdAndDelete(orderID);

		res.sendStatus(204);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
}
