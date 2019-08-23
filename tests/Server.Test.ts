
import * as chai from "chai"
import { TestRequest, TestResponse } from "./TestRequest";
import { ModelState } from "../src/server/utils/ModelState";
import { CreateUser } from "../src/server/RequestModel/CreateUser";
import { HttpStatusCodes } from "../src/server/utils/HttpStatusCodes";
import { post_login } from "../src/server/controllers/Auth";
let request = new TestRequest()
let response = new TestResponse()

describe("Testing Modelstate Object", ()=>{
    var body, code
    request.body = {
        password : "Carrfdc"
    }
    //@ts-ignore
    response.status = (mCode : number) => {
        
        code = mCode
        return response
    }
    // @ts-ignore
    response.json = (mbody ?: any) => {
        body = mbody
        return response
    }
    ModelState.isValid_from_body(CreateUser, request.body, response)
    it("Checks if modelstate checks required parameters and return BAd Reques", () => {
        chai.expect(code, "Model Did Not return Bad requesst, after bad request is sent").equal(HttpStatusCodes.BAD_REQUEST)
    })
    it("Checkes if modelstate return error objects", () => {
        chai.expect(body.error ? true : false).to.be.true
    })

    
    it("Modelstate returns false on not valid email", () => {
        request.body = {
            password : "cdfdvfdvfd",
            email : "vdcdvfdfe"
        }
    
        let rslt = ModelState.isValid_from_body(CreateUser, request.body, response)
        chai.expect(rslt).to.be.false
    })

    it("Modelstate returns true on email", () => {
        request.body = {
            password : "cdfdvfdvfd",
            email : "vdcdvfdfe@gmail.com"
        }
        let rsltx = ModelState.isValid_from_body(CreateUser, request.body, response)    
        chai.expect(rsltx).to.be.true
    })
})

describe("Testing Controllers", () => {
    describe("Testing Auth Controller",  () => {
        it("post login is working", () => {
            let user;
            request.body = {
                password : "fefefergv",
                email : "wer@fg.com"
            }
            //@ts-ignore
            response.json = (body ?: any) => {
                user = body
                return response
            }
            post_login(request, response)

            //chai.expect(response.statusCode).eqls(200)
            chai.expect(user).not.to.be.undefined
            chai.expect(user).not.to.be.null
        })
    })

    // More controller test cases
})

describe("Testing Middleware", () => {
    describe("Testing Auth middleware", () => {

    })
})