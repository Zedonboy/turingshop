import { ModelState } from "../utils/ModelState";
import { Order } from "../RequestModel/Order";
import { Request, Response } from "express";
import { OrderORM } from "../ORM/OrderORM";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { Error } from "../utils/Error";
var orderorm = new OrderORM();
export async function post_create_order(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(Order, req.body, res)) return;
  let order = ModelState.transform_to_instance(Order, req.body);
  try {
    let ordermodel = await orderorm.create(order);
    if (ordermodel) {
      res.json(ordermodel);
    } else {
      res.status(HttpStatusCodes.NOT_FOUND).json({
        error: new Error(
          HttpStatusCodes.NOT_FOUND,
          "Cart_id is not found",
          "USR_01",
          "cart_id"
        )
      });
    }
  } catch (err) {
      res.status(HttpStatusCodes.SERVER_ERROR).json({
          error : new Error(HttpStatusCodes.SERVER_ERROR, "Something bad happened", "SYS_20")
      })
  }
}
