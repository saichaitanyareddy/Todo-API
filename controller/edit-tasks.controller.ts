import { Request, Response } from "express";
import { prisma } from "../db/client";

export const editTasksHandler = async (req: Request, res: Response) => {
    await prisma.tasks.update({
        where: {
            id: req.params.id
        },
        data: req.body,
    });
    res.send("Task edited");
}