import {Component, EventEmitter} from '@angular/core';
import {bootstrap} from "@angular/platform-browser-dynamic";

class Product{
	constructor(
		public sku: string,
		public name: string,
		public imageUrl: string,
		public department: string[],
		public price: number
	) {

	}
}


@Component({
	selector: 'product-row',
	template: ''
})
class ProductRow {
	constructor() {}
}

@Component({
	selector: 'product-list',
	directives: [ProductRow],
	inputs: ['productList'],
	outputs: ['onProductSelected'],
	template:`
		<product-row
			*ngFor = "let myProduct of productList"
			[product] = 'myProduct'
			(click) = 'clicked(myProduct)'
			[class.selected] = 'isSelected(myProduct)' >
		</product-row>
	`
})

class ProductList{
	productList: Product[];

	onProductSelected: EventEmitter<Product>;
	currentProduct: Product;

	constructor(){
		this.onProductSelected = new EventEmitter();
	}
}

@Component({
	selector: 'inventory-app',
	directives: [ProductList],
	template: `
		<div class='inventory-app'>
			<product-list [productList] = 'products'
			(onProductSelected)="productWasSelected($event)">
			</product-list>
		</div>
	`
})

class InventoryApp{
	product: Product[];

	constructor(){
		this.product = [
		new Product(
			'NICEHAT', 'A Nice Black Hat',
			'/resources/images/products/black-hat.jpg',
			['Men', 'Accessories', 'Hats'],
			29.00),
		new Product('NEATOJACKET', 'Blue Jacket',
			'/resources/images/products/blue-jacket.jpg',
			['Women', 'Apparel', 'Jackets & Vests'],
			238.99),
		new Product('MYSHOES', 'Black Running Shoes',
			'/Resources/images/products/black-shoes.jpg', 
			['Men', 'Shoes', 'Running Shoes'],
			109.99)
		];
	}

	productWasSelected(product: Product): void {
		console.log('Product Clicked: ', procuct);
	}
}

bootstrap(InventoryApp);