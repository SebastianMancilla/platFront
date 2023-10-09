import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/supplier.service';
import { Product } from '../../models/supplier-response.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent implements OnInit{
  products!: Product[];
  constructor(private supplierService: SupplierService){}
  ngOnInit(): void {
    this.supplierService.getProducts().subscribe(products => this.products = products);
  }
}
