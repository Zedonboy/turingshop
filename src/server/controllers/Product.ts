import { Request, Response } from "express";
import { ProductORM } from "../ORM/ProductORM";
import { ModelState } from "../utils/ModelState";
import { CategoryByID } from "../RequestModel/CategoryByID";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { Error } from "../utils/Error";
import { DepartmentById } from "../RequestModel/DepartmentById";
import { Search_Request } from "../RequestModel/Search_Request";
import { PageRequest } from "../RequestModel/PageRequest";
var productOrm = new ProductORM();
export async function getProducts(req: Request, res: Response) {
  let pagerequest = ModelState.transform_to_instance(PageRequest, req.query);
  let products = await productOrm.read(pagerequest);
  res.json(products);
}

export async function getProducts_from_a_category(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(CategoryByID, req.params, res)) return;
  let catId = ModelState.transform_to_instance(CategoryByID, req.params);
  let pagerequest = ModelState.transform_to_instance(PageRequest, req.query);
  let arr = await productOrm.read_By_Cat_Id(
    parseInt(catId.category_id),
    pagerequest
  );
  if (arr) {
    res.json(arr);
  } else {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      error: new Error(
        HttpStatusCodes.NOT_FOUND,
        "category id do not exist",
        "CAT_01",
        "category_id"
      )
    });
  }
}

export async function getProducts_from_a_department(
  req: Request,
  res: Response
) {
  if (!ModelState.isValid_from_body(DepartmentById, req.params, res)) return;
  let depId = ModelState.transform_to_instance(DepartmentById, req.params);
  let pagerequest = ModelState.transform_to_instance(PageRequest, req.query);
  try {
    let arr = await productOrm.read_By_Dep_Id(
      parseInt(depId.department_id),
      pagerequest
    );
    if (arr) {
      res.json(arr);
    } else {
      res.status(HttpStatusCodes.NOT_FOUND).json({
        error: new Error(
          HttpStatusCodes.NOT_FOUND,
          "department id do not exist",
          "DEP_01",
          "department_id"
        )
      });
    }
  } catch (error) {
    res.status(HttpStatusCodes.SERVER_ERROR).json({
      error: new Error(
        HttpStatusCodes.SERVER_ERROR,
        error.message,
        "SYS_20",
        "department_id"
      )
    });
  }
}

export async function getProduct_from_search(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(Search_Request, req.query, res)) return;
  let pagerequest = ModelState.transform_to_instance(PageRequest, req.query);
  let search_Request = ModelState.transform_to_instance(
    Search_Request,
    req.query
  );
  try {
    let arr = await productOrm.read_By_search(
      search_Request.search_query,
      pagerequest
    );
    if (arr) {
      res.json(arr);
    } else {
      res.status(HttpStatusCodes.NOT_FOUND).json({
        error: new Error(
          HttpStatusCodes.NOT_FOUND,
          "search world had a problem i do not know of",
          ""
        )
      });
    }
  } catch (error) {
    res.status(HttpStatusCodes.SERVER_ERROR).json({
      error: new Error(HttpStatusCodes.SERVER_ERROR, error.message, "SYS_20")
    });
  }
}
