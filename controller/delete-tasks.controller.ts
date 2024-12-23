import { Request, Response } from "express";
import { prisma } from "../db/client";

export const deleteTasksHandler = async (req: Request, res: Response) => {
  await prisma.tasks.delete({
    where: {
      id: req.params.id
    },
  });
  res.send("Task deleted");
}
