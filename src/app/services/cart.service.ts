import { Injectable } from '@angular/core';
import { CartItems } from '../models/carItems';
import { CarItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){

    let item= CartItems.find(c=>c.product.productId===product.productId);
    if (item) {
      item.quantity+=1;
    }else{
      let carItem= new CarItem();
      carItem.product=product;
      carItem.quantity=1;
      CartItems.push(carItem)

    }
  }

  removeFromCart(product:Product){
    let item:CarItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CarItem[]{
    return CartItems;
  }



}
