import { Request, Response } from "express";

import handleError from "../services/errorServices";
import * as credentialsServices from '../services/credentialsServices';

export async function createCredentials(req: Request, res: Response) {
    const { id: userId } = res.locals.user;
    const credentials = req.body;

    try {
        await credentialsServices.addNew({ ...credentials, userId });

        res.status(201).send("Credentials created successfully");
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send(err.message);
    }
}