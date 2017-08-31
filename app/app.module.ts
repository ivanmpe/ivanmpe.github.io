import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ItemProductComponent} from './components/product/item/item-product.component';
import {ListItemsProductsComponent} from './components/product/list-itens/list-items-products.component';
import {ItemCartComponent} from './components/cart/item/item-cart.component';
import {ListItemsCartComponent} from './components/cart/list-itens/list-items-cart.component';

import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {PaymentComponent} from './components/cart/payment/payment.component';
import {TypecardComponent} from './components/cart/typecard/typecard.component';
import {DetailMoneyComponent} from './components/cart/detail-money/detail-money.component';
import {FormsModule} from '@angular/forms';
import {CommunicationService} from './services/communication.service';
import { ButtonFinalizaComponent } from './button-finaliza/button-finaliza.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ItemProductComponent,
        ListItemsProductsComponent,
        ItemCartComponent,
        ListItemsCartComponent,
        HomeComponent,
        PaymentComponent,
        TypecardComponent,
        DetailMoneyComponent,
        ButtonFinalizaComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ProductService, CartService, CommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
