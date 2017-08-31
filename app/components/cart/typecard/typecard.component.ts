import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CommunicationService} from '../../../services/communication.service';
import {Cart} from '../../../models/cart';
import {ButtonFinalizaComponent} from '../../../button-finaliza/button-finaliza.component'


@Component({
    selector: 'app-typecard',
    templateUrl: './typecard.component.html',
    styleUrls: ['./typecard.component.css']
})
export class TypecardComponent implements OnInit {

    cart: Cart;

    constructor(private cartService: CartService, private communicationService: CommunicationService) {
    }

    ngOnInit() {
        this.cart = this.cartService.getCart();
    }

    finalizarCompra() {
        this.cart.cartItem.forEach((cartItem, index) => {
            console.log(index);
            this.communicationService.esperaImpressao(cartItem.product.name + ' -  R$ ' + cartItem.product.price.toString() + ' - ' + cartItem.quantity.toString() + ' itens - subtotal :  R$ ' + cartItem.total.toString(), index);
        });
        this.communicationService.esperaImpressao('Total da Venda:' + this.cart.total.toString(), this.cart.cartItem.length);
    }
}
