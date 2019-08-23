import { required } from "../utils/ModelState";

export class Order{
    @required
    cart_id : string

    @required
    shipping_id : number
}