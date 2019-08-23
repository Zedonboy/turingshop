import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { secret, secret_expiration, secret_issuer } from "../config";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { HttpStatusMessages } from "../utils/HttpStatusMessages";
export function authenticated(req: Request, res: Response, next: () => void) {
  if (req.headers['user-key']) {
    let token = req.headers['user-key'];
    if(token instanceof Array){
      token = token[0]
    }
      if (token) {
        jwt.verify(token, secret, (err, decoded) => {
          if (err) {
            res.status(400).json({
              error: {
                status: HttpStatusCodes.UNAUTHORIZED,
                code: "AUTH_03",
                message: err.message
                  ? err.message
                  : "error verifying token given to me"
              }
            });
          } else {
            //@ts-ignore // possible source of error
            req.userId = decoded.id;
            next();
          }
        });
    } else {
      res.status(400).json({
        error: {
          status: HttpStatusCodes.UNAUTHORIZED,
          code: "AUTH_01",
          message: HttpStatusMessages.NO_AUTHORIZATION_HEADER
        }
      });
    }
  }
}
