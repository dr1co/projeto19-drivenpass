import { Request, Response } from "express";

import handleError from "../services/errorServices";
import * as wifiServices from '../services/wifiServices';

export async function createWifi(req: Request, res: Response) {
    const { id: userId } = res.locals.user;
    const wifi = req.body;

    try {
        await wifiServices.addNew({ ...wifi, userId: Number(userId) });

        res.status(201).send("Wifi created successfully");
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send("On createWifi: " + err.message);
    }
}