import express from 'express';

import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import { wifiSchema } from '../schemas/wifiSchema';
import { createWifi } from '../controllers/wifiController';

const wifiRouter = express.Router();

wifiRouter.post("/wifis", validateToken, validateSchema(wifiSchema), createWifi);

export default wifiRouter;