import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.get("/health", (_req: Request, res: Response) => res.send("ok"));

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
