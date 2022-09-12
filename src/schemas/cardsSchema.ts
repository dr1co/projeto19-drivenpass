import joi from 'joi';

import { ICard } from '../repositories/cardsRepository';

export const cardsSchema = joi.object<Omit<ICard, "id, userId">>({
    title: joi.string().required(),
    number: joi.string().required().length(16).pattern(/^[0-9]+$/, 'numbers'),
    securityCode: joi.string().required().length(3).pattern(/^[0-9]+$/, 'numbers'),
    expirationDate: joi.string().required().pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Exp date'),
    password: joi.string().required().length(4).pattern(/^[0-9]+$/, 'numbers'),
    isVirtual: joi.boolean().required(),
    type: joi.string().required().valid('CREDIT', 'DEBIT', 'DUAL'),
});