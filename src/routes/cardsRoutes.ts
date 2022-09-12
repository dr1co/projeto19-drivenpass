import express from 'express';

import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import { cardsSchema } from '../schemas/cardsSchema';
import { createCard } from '../controllers/cardsController';

const cardsRouter = express.Router();

cardsRouter.post("/cards", validateToken, validateSchema(cardsSchema), createCard);

export default cardsRouter;