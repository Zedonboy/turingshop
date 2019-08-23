import { DepartmentModel } from "../../server/Models/DepartmentModel";
import { CategoryModel } from "../../server/Models/Category";
import { ProductModel } from "../../server/Models/ProductModel";
import { User } from "../../server/Models/UserModel";

export class ClientState {
    cart_items : any[]
    departments : DepartmentModel[]
    categories : CategoryModel[]
    products : ProductModel[]
    user : User
}