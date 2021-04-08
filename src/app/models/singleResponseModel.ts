import { ResponseModel } from "./raponseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T

}