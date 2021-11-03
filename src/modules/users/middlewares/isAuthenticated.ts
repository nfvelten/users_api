import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../../../shared/errors/AppError";
import authConfig from "../../../config/auth";
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT is missing");
  }
  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    return next();
  } catch {
    throw new AppError("Invalid JWT");
  }
}
