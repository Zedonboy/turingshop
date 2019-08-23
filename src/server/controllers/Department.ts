import { Request, Response } from "express";
import { ModelState } from "../utils/ModelState";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { DepartmentORM } from "../ORM/DepartmentORM";
import { DepartmentById } from "../RequestModel/DepartmentById";
let departmentOrm = new DepartmentORM()
export function getCategories(req : Request, res : Response){
    let catelist = departmentOrm.read()
    res.json(catelist)
}

export function getCategory_By_Id(req : Request, res : Response){
    if(!ModelState.isValid_from_body(DepartmentById, req.params, res)) return
    let categoryId = ModelState.transform_to_instance(DepartmentById, req.params)
    let id = parseInt(categoryId.department_id);
    let dep = departmentOrm.read(id)[0]
    if(dep){
        res.json(dep)
    } else {
        res.status(HttpStatusCodes.NOT_FOUND).json({
            error : {
                "status": HttpStatusCodes.NOT_FOUND,
                "code": "DEP_02",
                "message": "Department with such Id does not exist",
                "field": "department_id"
              }
             
        })
    }
}