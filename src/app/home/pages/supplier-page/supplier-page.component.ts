import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/supplier.service';
import { Supplier } from '../../interface/supplier.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-page',
  templateUrl: './supplier-page.component.html',
  styles: [
  ]
})
export class SupplierPageComponent implements OnInit {

  suppliers!: Supplier[];

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    ){}
  ngOnInit(): void {
    this.supplierService.getSupplier().subscribe(suppliers => this.suppliers = suppliers);
  }

}
