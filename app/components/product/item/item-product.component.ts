import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
    selector: 'app-item-product',
    templateUrl: './item-product.component.html',
    styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
    @Input() product: Product;

    constructor() {
    }

    inserir() {
        console.log('produto inserido com sucesso!');
    }

    ngOnInit() {
    }

}
