import {required, email} from "../utils/ModelState"
export class CreateUser{
    @required
    password : string = null

    @email
    @required
    email : string = null
}