import { Component, OnInit, Input } from '@angular/core';

export interface Product {
  name: string;
  id: number;
  price: number;
  description: string;
}

const ELEMENT_DATA: Product[] = [
  { id: 1, name: 'Hydrogen', price: 1.0079, description: 'H' },
  { id: 2, name: 'Helium', price: 4.0026, description: 'He' },
  { id: 3, name: 'Lithium', price: 6.941, description: 'Li' },
  { id: 4, name: 'Beryllium', price: 9.0122, description: 'Be' },
  { id: 5, name: 'Boron', price: 10.811, description: 'B' },
  { id: 6, name: 'Carbon', price: 12.0107, description: 'C' },
  { id: 7, name: 'Nitrogen', price: 14.0067, description: 'N' },
  { id: 8, name: 'Oxygen', price: 15.9994, description: 'O' },
  { id: 9, name: 'Fluorine', price: 18.9984, description: 'F' },
  { id: 10, name: 'Neon', price: 20.1797, description: 'Ne' },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // public Product:product="vasanth";
  @Input() product={name : "vasanth"};
  // product: Product;
  isAddProductView = false;
  onSelect(Product: Product): void {
    this.product = Product;
  }
  addProductView(): void {
    this.isAddProductView = true;
  }
  saveProduct(Product: Product): void {
    console.log(this.product);
    this.isAddProductView = false;
  }
  cancelAddProductView(): void {
    this.isAddProductView = false;
  }
  submit($event) {
    /* form code */
    $event.preventDefault();
  }
  
  constructor() { }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  dataSource = ELEMENT_DATA;

}
