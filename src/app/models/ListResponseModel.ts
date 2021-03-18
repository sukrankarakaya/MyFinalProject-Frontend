import { ResponseModel } from "./raponseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
}