import { Request, Response } from "express";
import { CategoryORM } from "../ORM/CategoryORM";
import { ModelState } from "../utils/ModelState";
import { CategoryByID } from "../RequestModel/CategoryByID";
import { HttpStatusCodes } from "../utils/HttpStatusCodes";
import { Get_Product_Request } from "../RequestModel/Cat_Item_Id";
let categoryorm = new CategoryORM();
export function getCategories(req: Request, res: Response) {
  let catelist = categoryorm.read();
  res.json(catelist);
}

export async function getCategory_By_Id(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(CategoryByID, req.params, res)) return;
  let categoryId = ModelState.transform_to_instance(CategoryByID, req.params);
  let id = parseInt(categoryId.category_id);
  let cat = await categoryorm.read(id)[0];
  if (cat) {
    res.json(cat);
  } else {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      error: {
        status: HttpStatusCodes.NOT_FOUND,
        code: "CAT_01",
        message: "Category with such Id does not exist",
        field: "category_id"
      }
    });
  }
}

export async function getCategories_of_a_prod(req: Request, res: Response) {
  if (!ModelState.isValid_from_body(Get_Product_Request, req.params, res))
    return;
  let getProduct = ModelState.transform_to_instance(
    Get_Product_Request,
    req.params
  );
  let id = parseInt(getProduct.product_id);
  let rslt = await categoryorm.getCategoriesOfProduct(id);
  if (rslt) {
    if (rslt.length > 0) {
      res.json(rslt);
    } else {
      res.json(rslt).statusMessage =
        "I still don't understand why a product dont have category";
    }
  } else {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      error: {
        status: HttpStatusCodes.NOT_FOUND,
        code: "CAT_02",
        message: "categories with such id is not found"
      }
    });
  }
}

