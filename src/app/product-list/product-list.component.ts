import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface Product {
  name: string;
  id: number;
  price: number;
  description: string;
}

const ELEMENT_DATA: Product[] = [
  // { id: 1, name: 'Hydrogen', price: 1.0079, description: 'H' },
  // { id: 2, name: 'Helium', price: 4.0026, description: 'He' },
  // { id: 3, name: 'Lithium', price: 6.941, description: 'Li' },
  // { id: 4, name: 'Beryllium', price: 9.0122, description: 'Be' },
  // { id: 5, name: 'Boron', price: 10.811, description: 'B' },
  // { id: 6, name: 'Carbon', price: 12.0107, description: 'C' },
  // { id: 7, name: 'Nitrogen', price: 14.0067, description: 'N' },
  // { id: 8, name: 'Oxygen', price: 15.9994, description: 'O' },
  // { id: 9, name: 'Fluorine', price: 18.9984, description: 'F' },
  // { id: 10, name: 'Neon', price: 20.1797, description: 'Ne' },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // public Product:product="vasanth";
  dataSource: MatTableDataSource<Product>;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  @Input() 
  productData: Product = {id:0,name:"",price:0,description:""};
  product: Product;
  isAddProductView = false;
  onSelect(Product: Product): void {
    this.product = Product;
  }
  addProductView(): void {
    this.isAddProductView = true;
  }
  saveProduct(Product: Product): void {
    this.productData.id = ELEMENT_DATA.length+1;
    ELEMENT_DATA.push(this.productData)
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    console.log(this.dataSource.data);
    this.isAddProductView = false;
  }
  cancelAddProductView(): void {
    this.isAddProductView = false;
  }
  submit($event) {
    /* form code */
    $event.preventDefault();
  }
  
  constructor() { 
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  // dataSource = new MatTableDataSource<Product>();
  // dataSource = ELEMENT_DATA;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
