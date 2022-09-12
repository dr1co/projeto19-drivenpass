import { Request, Response } from 'express';

import handleError from '../services/errorServices';
import * as cardsServices from '../services/cardsServices';

export async function createCard(req: Request, res: Response) {
    const { id: userId } = res.locals.user;
    const card = req.body;

    try {
        await cardsServices.addNew({ ...card, userId: Number(userId) });

        res.status(201).send("Created card successfully");
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send("On createCard: " + err.message);
    }
}