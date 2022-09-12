import { Request, Response } from "express";

import handleError from "../services/errorServices";
import * as notesServices from '../services/notesServices';

export async function createNote(req: Request, res: Response) {
    const { id: userId } = res.locals.user;
    const note = req.body;

    try {
        await notesServices.addNew({ ...note, userId: Number(userId) });

        res.status(201).send("Note created successfully");
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send("On createCredentials: " + err.message);
    }
}