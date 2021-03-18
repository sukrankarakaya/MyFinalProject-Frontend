import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl ="https://localhost:44311/api/categories/getall";


  constructor(private httpClient:HttpClient) { }

  getCaregorys():Observable<ListResponseModel<Category>>{

    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)

  }
   
  
  
}
