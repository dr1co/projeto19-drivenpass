import express from 'express';

import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import { notesSchema } from '../schemas/notesSchema';
import { createNote } from '../controllers/notesController';

const notesRouter = express.Router();

notesRouter.post("/notes", validateToken, validateSchema(notesSchema), createNote);

export default notesRouter;