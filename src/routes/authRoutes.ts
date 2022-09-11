import express from 'express';

import validateSchema from '../middlewares/validateSchemaMiddleware';
import { userSchema } from '../schemas/userSchema';
import { createUser } from '../controllers/userController';

const authRouter = express.Router();

authRouter.post("/signup", validateSchema(userSchema), createUser);

export default authRouter;