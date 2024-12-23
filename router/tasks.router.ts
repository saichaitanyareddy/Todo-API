import { Router } from "express";
import { createTasksHandler } from "../controller/create-tasks.controller";
import { getTasksHandler } from "../controller/get-tasks.controller";
import { editTasksHandler } from "../controller/edit-tasks.controller";
import { deleteTasksHandler } from "../controller/delete-tasks.controller";
export const tasksRouter = Router();

tasksRouter.post('/tasks', createTasksHandler);
tasksRouter.get("/tasks", getTasksHandler);
tasksRouter.put("/tasks/:id", editTasksHandler);
tasksRouter.delete("/tasks/:id", deleteTasksHandler);
