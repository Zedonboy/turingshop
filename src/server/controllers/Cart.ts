import { Request, Response } from "express";
import { Crypto } from "../utils/Crypto";
import * as jwt from "jsonwebtoken";
import { secret } from "../config";
import { ModelState } from "../utils/ModelState";
import { Cart, CartID } from "../RequestModel/Cart";
import { CartORM } from "../ORM/CartORM";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { HttpStatusMessages } from "../utils/HttpStatusMessages";
import { Error } from "../utils/Error";
let cartorm = new CartORM();
export async function get_generateCartId(req: Request, res: Response) {
  let cartid = Crypto.generateRndBytes().toString("ut8");
  let decrypted = jwt.sign(cartid, secret, {expiresIn : '24h'});
  res.json({
    cart_id: decrypted
  });
}

export async function post_add_cart(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(Cart, req.body, res)) return;
  let cart = ModelState.transform_to_instance(Cart, req.body);
  try {
      cart.cart_id = await decodeCartId(cart.cart_id)
  } catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).json({
          error : new Error(HttpStatusCodes.BAD_REQUEST,"Invalid Cartid", "USR_01")
      })
      return
  }
  try {
    let retnCart = cartorm.create(cart);
    if (retnCart) {
      res.json({
        message: HttpStatusMessages.API_OK
      });
    } else {
      res.status(HttpStatusCodes.SERVER_ERROR).json({
        error: new Error(
          HttpStatusCodes.SERVER_ERROR,
          "Could not add cart to database",
          "SYS_20"
        )
      });
    }
  } catch (error) {
    res.status(HttpStatusCodes.SERVER_ERROR).json({
      error: error
    });
  }
}

export async function post_get_Cart(req : Request, res : Response){
  if(!ModelState.isValid_from_body(CartID, req.body, res)) return
    let cart = ModelState.transform_to_instance(CartID, req.body)
    try {
        cart.cart_id = await decodeCartId(cart.cart_id)
    } catch (error) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({
            error : new Error(HttpStatusCodes.BAD_REQUEST,"Invalid Cartid", "USR_01")
        })
        return
    }

    // Do things int result like C way
    let rslt = cartorm.read(cart.cart_id)
    if(rslt){
        res.json(rslt)
    } else {
        res.status(HttpStatusCodes.SERVER_ERROR).json({
            error : new Error(HttpStatusCodes.SERVER_ERROR, "Something actually went wrong", "SYS_20")
        })
    } 
}

export async function delete_empty_cart(req : Request, res : Response){
    if(!ModelState.isValid_from_body(CartID, req.body, res)) return
    let cart = ModelState.transform_to_instance(CartID, req.body)
    try {
        cart.cart_id = await decodeCartId(cart.cart_id)
    } catch (error) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({
            error : new Error(HttpStatusCodes.BAD_REQUEST,"Invalid Cartid", "USR_01")
        })
        return
    }

    // Do things int result like C way
    let rslt = cartorm.delete(cart.cart_id)
    if(rslt){
        res.json({
            message : HttpStatusMessages.API_OK
        })
    } else {
        res.status(HttpStatusCodes.SERVER_ERROR).json({
            error : new Error(HttpStatusCodes.SERVER_ERROR, "Something actually went wrong", "SYS_20")
        })
    }
}

async function  decodeCartId(cart_id : string){
    let cartID = jwt.verify(cart_id, secret)
    return cartID.toString()
}