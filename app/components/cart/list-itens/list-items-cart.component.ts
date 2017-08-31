import {Component, OnInit} from '@angular/core';
import {Cart} from '../../../models/cart';
import {CartService} from '../../../services/cart.service';
import {Product} from '../../../models/product';
import {CartItem} from '../../../models/cart-item';
import {ProductService} from '../../../services/product.service';


@Component({
    selector: 'app-list-items-cart',
    templateUrl: './list-items-cart.component.html',
    styleUrls: ['./list-items-cart.component.css']
})
export class ListItemsCartComponent implements OnInit {

    cart: Cart;
    // valorTotal: number = 0;
    i: number;
    codigo: number;
    quantidade: number;

    totalCompra: number;

    /*Lista que armazena todos os produtos disponíveis*/
    itens: Product[];

    /*Lista que armazena os itens da compra : produto + quantidade*/
    pedido: CartItem[] = [];

    inserirItem() {
        const produto: Product = this.itens.filter(value => value.id === this.codigo).pop();
        const item: CartItem = new CartItem(produto, this.quantidade, produto.price * this.quantidade);

        if (this.pedido.filter(value => value.product === item.product).length !== 0) {
            /*Se o produtor já estiver no carrinho, é alterado a quantidade e o valor total desse produto.
            Altera quantidade*/
            this.pedido.filter(value => value.product === item.product).filter(
                value => value.quantity += item.quantity
            );
            /*Altera valor total*/
            this.pedido.filter(value => value.product === item.product).filter(
                value => value.total += (item.quantity * item.product.price)
            );
        } else {
            this.pedido.push(item);
        }
        this.totalCompra = 0;
        for (let i = 0; i < this.pedido.length; i++) {
            this.totalCompra += this.pedido[i].total;
        }
        this.cart.cartItem = this.pedido;
        this.cart.total = this.totalCompra;
    }

    removerProduto(id: number) {
        this.pedido = this.pedido.filter(value => value.product.id !== id);
        this.totalCompra = 0;
        for (let i = 0; i < this.pedido.length; i++) {
            this.totalCompra += this.pedido[i].total;
        }
        this.cart.cartItem = this.pedido;
        this.cart.total = this.totalCompra;
    }

    constructor(private cartService: CartService, private productService: ProductService) {
    }

    efetuarPagamento() {

        /*Usa o alert para impressao dos dados contidos no pedido que é o vetor de cartItem[]*/

        for (this.i = 0; this.i < this.pedido.length; this.i++) {
            alert('id: ' + this.pedido[this.i].product.id
                + '\nNome do Produto: ' + this.pedido[this.i].product.description
                + '\nValor: ' + this.pedido[this.i].product.price +
                '\nQuantidade: ' + this.pedido[this.i].quantity)
        }
        /*Usa o alert para impressao dos dados contidos no vetor cartItem[]
            for(this.i=0; this.i < this.cart.cartItem.length; this.i++){
              alert('id: ' + this.cart.cartItem[this.i].product.id
              + '\nNome do Produto: ' + this.cart.cartItem[this.i].product.description
              + '\nValor: '+ this.cart.cartItem[this.i].product.price  +
              '\nQuantidade: ' + this.cart.cartItem[this.i].quantity)
          }*/
        /*somatorio de preços dos produtos*/
        alert('\nValor total da compra: ' + this.totalCompra);
    }

    /*cancelar a compra no carrinho*/
    cancelarCompra() {
        if (confirm("Deseja cancelar a compra?")) {
            this.cart.cartItem.splice(0);
            window.location.replace("http://localhost:4200");
        }
    }


    ngOnInit() {
        console.log(this.cart);
        this.itens = this.productService.getProducts();
        this.cart = this.cartService.getCart();
    }

}
