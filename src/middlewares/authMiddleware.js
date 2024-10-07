import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/constants.js';

export const authMiddleware = (req, res, next) =>{
    const token = req.cookies['auth'];

    if(!token) {
        return next();
    }

    jwt.verify(token, JWT_SECRET)
};
