import type { NextApiRequest, NextApiResponse } from "next";
export type IUser = {
    id?: number;
    username?: string;
    password?: string;
}
export const users = [{
    id: 1,
    username: "TranDung 1",
    password: "trandung20011"
},
{
    id: 2,
    username: "TranDung 2",
    password: "trandung20012"
}]
export default async function handler(req: NextApiRequest, res: NextApiResponse<IUser[]>) {

    if (req.method === "GET") {
        return res.status(200).json(users);
    }
}