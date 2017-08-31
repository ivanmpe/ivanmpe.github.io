import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'app-list-items-products',
    templateUrl: './list-items-products.component.html',
    styleUrls: ['./list-items-products.component.css']
})
export class ListItemsProductsComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
        console.log(this.products);
    }

    getProducts(): void {
        this.products = this.productService.getProducts();
    }

}
