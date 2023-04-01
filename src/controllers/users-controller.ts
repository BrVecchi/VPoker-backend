import { Request, Response } from "express";
import httpStatus from "http-status";

import userService from "../services/users-service";

export async function usersPost(req: Request, res: Response) {
  const { name, email, password } = req.body;
  console.log("entrou no userPost");

  try {
    const user = await userService.createUser({ name, email, password });
    console.log("passou do createUser");

    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}