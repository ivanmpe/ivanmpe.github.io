import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Cart} from '../../../models/cart';
import {CommunicationService} from '../../../services/communication.service';
import {ButtonFinalizaComponent} from '../../../button-finaliza/button-finaliza.component'


@Component({
    selector: 'app-detail-money',
    templateUrl: './detail-money.component.html',
    styleUrls: ['./detail-money.component.css']
})
export class DetailMoneyComponent implements OnInit {

    cart: Cart;

    constructor(private cartService: CartService, private communicationService: CommunicationService) {
    }

    ngOnInit() {
        this.cart = this.cartService.getCart();
        console.log(this.cart);
    }

    finalizarCompra() {
        this.cart.cartItem.forEach((cartItem, index) => {
            console.log(index);
            this.communicationService.esperaImpressao(cartItem.product.name + ' -  R$ ' + cartItem.product.price.toString() + ' - ' + cartItem.quantity.toString() + ' itens - subtotal :  R$ ' + cartItem.total.toString(), index);
        });
        this.communicationService.esperaImpressao('Total da Venda:' + this.cart.total.toString(), this.cart.cartItem.length);
    }
}
