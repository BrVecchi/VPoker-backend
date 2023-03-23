import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { connectDb, disconnectDB } from "./config";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (_req: Request, res: Response) => res.send("ok"));

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
