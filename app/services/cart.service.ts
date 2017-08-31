import {Injectable} from '@angular/core';
import {Cart} from '../models/cart';
import {cart} from '../data/cart.data';

@Injectable()
export class CartService {

    constructor() {
    }

    getCart(): Cart {
        return cart;
    }

}
