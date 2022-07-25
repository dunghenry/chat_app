import { IUser, users } from './index';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IUser>) {
    const id = req.query.id;
    if (req.method === "GET") {
        const user = users.find(user => user.id.toString() === id);
        return res.status(200).json({...user});
    }
}