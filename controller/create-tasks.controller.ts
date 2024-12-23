import { Request, Response } from "express";
import { prisma } from "../db/client";

export const createTasksHandler = async (req: Request, res: Response) => {
  await prisma.tasks.create({
    data: {
      title: req.body.title,
      color: req.body.color
    }
  });
  res.send("Task created");
}
