import { Request, Response } from "express";
import { prisma } from "../db/client";

export const getTasksHandler = async (req: Request, res: Response) => {
    const data = await prisma.tasks.findMany();
    res.send(data);
}
