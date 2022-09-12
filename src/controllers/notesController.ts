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

export async function getAllNotes(req: Request, res: Response) {
    const { id: userId } = res.locals.user;

    try {
        const notes = await notesServices.getAll(Number(userId));

        res.status(200).send(notes);
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send("On getAllCredentials: " + err.message);
    }
}

export async function deleteNote(req: Request, res: Response) {
    const { id } = req.params;
    const { id: userId } = res.locals.user;

    try {
        await notesServices.deleteOne(Number(id), Number(userId));

        res.status(203).send("Note deleted successfully");
    } catch (err: Error | any) {
        const statusCode = handleError(err.code);
        res.status(statusCode).send("On getAllCredentials: " + err.message);
    }
}