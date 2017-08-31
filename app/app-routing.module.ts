import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListItemsCartComponent} from './components/cart/list-itens/list-items-cart.component';
import {HomeComponent} from './components/home/home.component';
import {PaymentComponent} from './components/cart/payment/payment.component';
import {TypecardComponent} from './components/cart/typecard/typecard.component';
import {DetailMoneyComponent} from './components/cart/detail-money/detail-money.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: ListItemsCartComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'typecard', component: TypecardComponent},
    {path: 'detail-money', component: DetailMoneyComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
