import * as express from "express";
import { prisma } from "./db/client";

import { tasksRouter } from "./router/tasks.router";
import cors from "cors";

const app = express.default();
app.use(express.json());
app.use(cors());
async function start() {
  app.use('/', tasksRouter);
  app.listen(3200, () => {
    console.log("Todo API server is listening on port", 3200);
  })
}

start()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
