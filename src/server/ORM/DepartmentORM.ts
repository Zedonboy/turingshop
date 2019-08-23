import { ORM } from "./ORM";
import { DepartmentModel } from "../Models/DepartmentModel";

export class DepartmentORM implements ORM{
    tablename: string = ""    
    create(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    read(id ?: number) : Array<DepartmentModel> {
        return [new DepartmentModel()]
    }
    update(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
    delete(...arg: any[]) {
        throw new Error("Method not implemented.");
    }


}