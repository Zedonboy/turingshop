import { required } from "../utils/ModelState";

export class Cart{
    @required
    cart_id : string

    @required
    product_id : number
}

export class CartID{
    @required
    cart_id : string
}

export class Cart_Array{
  cart_array : []  
}