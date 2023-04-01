import { Router } from "express";

import { usersPost } from "../controllers";
import { validateBody } from "../middlewares/validation-middleware";
import { createUserSchema } from "../schemas";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);

export { usersRouter };
