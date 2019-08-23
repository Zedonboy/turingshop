import { ORM } from "./ORM";
import { Cart } from "../RequestModel/Cart";
import { CartModel } from "../Models/CartModel";

export class CartORM implements ORM{
    tablename: string;    
    create(cart : Cart) : CartModel{
        return new CartModel()
    }
    read(cartId : string) : CartModel {
        return new CartModel()
    }
    update(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    delete(cartId : string) : number {
        return 1
    }

    
}