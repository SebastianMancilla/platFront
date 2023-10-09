import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthorizedChannelPageComponent } from './pages/authorized-channel-page/authorized-channel-page.component';
import { DetailSupplierComponent } from './pages/supplier-page/components/detail-supplier/detail-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home-page', component: HomePageComponent },
      { path: 'supplier', component: SupplierPageComponent, },
      { path: 'supplier/:id', component: DetailSupplierComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'authorized-channel', component: AuthorizedChannelPageComponent },
      { path: '**', redirectTo: 'home-page' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
