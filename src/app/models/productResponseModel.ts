import { Product } from "./product";
import { ResponseModel } from "./raponseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Product[],
    
}