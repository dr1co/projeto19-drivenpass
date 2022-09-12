import express from 'express';

import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import { cardsSchema } from '../schemas/cardsSchema';
import { createCard, getAllCards } from '../controllers/cardsController';

const cardsRouter = express.Router();

cardsRouter.post("/cards", validateToken, validateSchema(cardsSchema), createCard);
cardsRouter.get("/cards", validateToken, getAllCards);

export default cardsRouter;