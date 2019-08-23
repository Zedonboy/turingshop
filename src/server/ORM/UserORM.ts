import { ORM } from "./ORM";
import { User } from "../Models/UserModel";
import { CreateUser } from "../RequestModel/CreateUser";

export class UserORM implements ORM{
    constructor (){
        
    }
    create(arg : CreateUser | User) : User {
        if(arg instanceof CreateUser){

        } else {

        }
        return null
    }
    read(email : string) : User {
        let user = new User()
        user.email = "z@x.com"
        user.password = "love"
        user.id = 1
        return user;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
    tablename = "user"
}