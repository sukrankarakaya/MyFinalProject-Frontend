import { Category } from "./category";
import { ResponseModel } from "./raponseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}