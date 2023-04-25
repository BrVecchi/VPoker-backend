import { Router } from "express";

import { getFormats } from "../controllers/formats-controller";

const formatsRouter = Router();

formatsRouter.get("/", getFormats);

export { formatsRouter };
