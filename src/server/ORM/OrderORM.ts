import { ORM } from "./ORM";
import { Order } from "../RequestModel/Order";
import { OrderModel } from "../Models/OrderModel";

export class OrderORM implements ORM{
    tablename: string;    
    create(order : Order) : OrderModel {
        return new OrderModel()        
    }
    read(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    update(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    delete(...arg: any[]) {
        throw new Error("Method not implemented.");
    }


}