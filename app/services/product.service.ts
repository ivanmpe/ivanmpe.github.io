import {Injectable} from '@angular/core';

import {Product} from '../models/product';
import {products} from '../data/products.data';


@Injectable()
export class ProductService {

    constructor() {
    }

    getProducts(): Product[] {
        return products;
    }

}
