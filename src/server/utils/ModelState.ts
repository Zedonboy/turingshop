import "reflect-metadata"
import { Response } from "express";
import { HttpStatusCodes } from "./HttpStatusCodes";
import { Error } from "./Error";
import * as validate from "validator"
import { element } from "prop-types";
const requiredDecoratorKeys = "required"
const emailDecoratorKeys = "email"
export class ModelState{
    public static isvalid_array<T>(arg : new () => T, target : any[], resp : Response){
        if(target instanceof Array){
            target.forEach(element => {
                this.isValid_from_body(arg, element, resp)
            })
        }
    }
    public static isValid_from_body<T>(arg : new () => T, target : any, resp : Response) : boolean{
        let obj = new arg()
        let rslt = true
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(!!Reflect.getMetadata(requiredDecoratorKeys,obj, key)){
                    if(!target || !target[key]){
                        resp.status(HttpStatusCodes.BAD_REQUEST).json({
                            error : new Error(HttpStatusCodes.BAD_REQUEST, `${key} is required`, 'USR_01', key)
                        })
                        rslt = false
                        break
                    }
                }

                if(!!Reflect.getMetadata(emailDecoratorKeys, obj, key)){
                    if(target || target[key]){
                        if(!validate.isEmail(target[key])){
                            resp.status(HttpStatusCodes.BAD_REQUEST).json({
                                error : new Error(HttpStatusCodes.BAD_REQUEST, "email is not valid", 'USR_01', key)
                            })
                            rslt = false
                            break
                        }
                    }
                }
            }
        }

        return rslt
    }

    public static transform_to_instance<T>(arg : new () => T, target : any) : T{
        let reslt = new arg();
        for (const key in reslt) {
            reslt[key] = target[key] ? target[key] : null
        }
        return reslt;
    }
}

export function required(target : any, propkey : string){
    return Reflect.defineMetadata("required", true, target, propkey)
}

export function email(target : any, propKey : string){
    return Reflect.defineMetadata("email", true, target, propKey)
}
