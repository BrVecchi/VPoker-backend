import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { connectDb, disconnectDB, loadEnv } from "./config";
import { handleApplicationErrors } from "./middlewares/error-handling-middleware";
import { authenticationRouter } from "./routers/authentication-router";
import { roomsRouter } from "./routers/rooms-router";
import { usersRouter } from "./routers/users-router";

loadEnv();

const app = express();
app
  .use(express.json())
  .use(cors())
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/rooms", roomsRouter)
  .use(handleApplicationErrors);

app.get("/health", (_req: Request, res: Response) => res.send("ok"));

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
