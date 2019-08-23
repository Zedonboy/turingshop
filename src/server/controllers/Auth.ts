import { ModelState } from "../utils/ModelState";
import { CreateUser } from "../RequestModel/CreateUser";
import { Request, Response } from "express";
import { UserORM } from "../ORM/UserORM";
import * as jwt from "jsonwebtoken";
import { secret, secret_expiration, secret_issuer } from "../config";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { HttpStatusMessages } from "../utils/HttpStatusMessages";
let userOrm = new UserORM();
export function post_login(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(CreateUser, req, res)) return;
  let createuserModel = ModelState.transform_to_instance(CreateUser, req.body);
  let user = userOrm.read(createuserModel.email);
  if (user) {
    res.json({
      token: generate_token({ id: user.id }),
      token_expiration: secret_expiration,
      user: user,
      message: HttpStatusMessages.API_OK
    });
  } else {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      error: {
        status: HttpStatusCodes.NOT_FOUND,
        message: HttpStatusMessages.USER_NOT_FOUND
      }
    });
  }
}

export function post_create(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(CreateUser, req.body, res)) return;
  let createuserModel = ModelState.transform_to_instance(CreateUser, req.body);
  let user = userOrm.create(createuserModel);
  if (user) {
    res.json({
      token: generate_token({ id: user.id }),
      token_expiration: secret_expiration,
      user: user,
      message: HttpStatusMessages.API_OK
    });
  } else {
    res.json({
      error: {
        status: 400,
        code: "USR_04",
        message: "The email already exists.",
        field: "email"
      }
    });
  }
}

export function get_logout(req: Request, res: Response) {
    // One does not simply logout with Json WEb Tokens
}

function generate_token(payload: any) {
  return jwt.sign(payload, secret, {
      expiresIn : secret_expiration,
      issuer : secret_issuer
  });
}
