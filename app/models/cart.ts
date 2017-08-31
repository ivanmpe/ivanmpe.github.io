import {Status} from './status.enum';
import {CartItem} from './cart-item';

export class Cart {

    //status: Status;

    constructor(public cartItem: CartItem[], public total: number) {
    }
}