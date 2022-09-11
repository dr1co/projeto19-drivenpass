import { NextFunction, Request, Response } from "express";

import handleError from "../services/errorServices";
import * as userServices from '../services/userServices';

export async function createUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    try {
        await userServices.addNew(user);

        res.status(201).send("User registered successfully");
    } catch (err: Error | any) {
        if (err.code) {
            const statusCode = handleError(err.code);
            return res.status(statusCode).send("On createUser: " + err.message);
        }
        res.status(500).send("On createUser: " + err);
    }
}