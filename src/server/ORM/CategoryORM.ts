import { ORM } from "./ORM";
import { CategoryModel } from "../Models/Category";

export class CategoryORM implements ORM{
    tablename: string = "category" 
    create(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    read(...arg: any[]) : Array<CategoryModel> {
        return [new CategoryModel()]
    }

    getCategoriesOfProduct(product_id : number) : Array<CategoryModel>{
        return [new CategoryModel()]
    }
    update(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    delete(...arg: any[]) {
        throw new Error("Method not implemented.");
    }


}