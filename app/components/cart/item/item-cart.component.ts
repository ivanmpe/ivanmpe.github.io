import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../../models/cart-item';
import {cart} from '../../../data/cart.data';

@Component({
    selector: '[app-item-cart]',
    templateUrl: './item-cart.component.html',
    styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
    @Input() cartItem: CartItem;
    @Input() id: number;
    cart = cart;
    constructor() {
    }

    removeItem(){
        if (this.cartItem.quantity > 1){
            this.cartItem.quantity = this.cartItem.quantity-1;
        } else if ((this.cartItem.quantity <= 1)) {
            this.cart.cartItem.splice(this.id, 1);
        }
    }

    addItem(){
        if (this.cartItem.quantity >= 1 && this.cartItem.quantity < 99){
            this.cartItem.quantity = this.cartItem.quantity+1;
        } else {
            alert("Você ultrapassou o limite de 99 itens")
        }

    }

    ngOnInit() {
    }

}
