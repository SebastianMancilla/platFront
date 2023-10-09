import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SupplierResp } from 'src/app/home/models/supplier-response.model';
import { SupplierService } from 'src/app/home/service/supplier.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styles: [
  ]
})
export class DetailSupplierComponent implements OnInit {
  supplier!: SupplierResp;
  cols!: Column[];
  colsChannel!: Column[];
  constructor(
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.supplierService.getSupplierByCode(id)),
      ).subscribe(supplier => {
        if (!supplier) return this.router.navigate(['/platform/supplier']);

        this.supplier = supplier;
        return;
      });

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'amount', header: 'Amount' }
    ];

    this.colsChannel = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
    ];
  }

}
