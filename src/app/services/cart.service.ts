import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  list():CartItem[] {
    return CartItems;
  }

  addToCart(car:Car, rentDate:Date, returnDate:Date) {
    let item = CartItems.find(c => c.car.id === car.id);
    if (item === undefined) {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.rentDate = rentDate;
      cartItem.returnDate = returnDate;

      CartItems.push(cartItem);
    }
  }

  removeFromCart(car:Car) {
    let item:CartItem = CartItems.find(c => c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  clearCart() {
    CartItems.splice(0, CartItems.length);
  }
}
