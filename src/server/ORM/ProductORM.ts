import { ORM } from "./ORM";
import { ProductModel } from "../Models/ProductModel";
import { PageRequest } from "../RequestModel/PageRequest";

export class ProductORM implements ORM {
  tablename: string;
  getLatest() {}
  create(...arg: any[]) {
    throw new Error("Method not implemented.");
  }
  read(pagereq ?: PageRequest) : Array<ProductModel> {
    return [new ProductModel()]
  }
  read_By_Cat_Id(id : number, pagereq ?: PageRequest) : Array<ProductModel>{
    return [new ProductModel()]
  }
  read_By_Dep_Id(id : number, pagereq ?: PageRequest) : Array<ProductModel>{
    return [new ProductModel()]
  }
  update(...arg: any[]) {
    throw new Error("Method not implemented.");
  }
  read_By_search(searchWord : string, pagereq ?: PageRequest) : Array<ProductModel>{
    return [new ProductModel()]
  }
  delete(...arg: any[]) {
    throw new Error("Method not implemented.");
  }
}
