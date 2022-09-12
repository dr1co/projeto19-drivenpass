import express from 'express';

import validateSchema from '../middlewares/validateSchemaMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';
import { credentialsSchema } from '../schemas/credentialsSchema';
import { createCredentials } from '../controllers/credentialsController';

const credentialsRouter = express.Router();

credentialsRouter.post("/credentials", validateToken, validateSchema(credentialsSchema), createCredentials);

export default credentialsRouter;