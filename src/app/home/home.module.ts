import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PrimeMaterialModule } from '../prime-material/prime-material.module';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthorizedChannelPageComponent } from './pages/authorized-channel-page/authorized-channel-page.component';
import { DetailSupplierComponent } from './pages/supplier-page/components/detail-supplier/detail-supplier.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    SideNavComponent,
    SupplierPageComponent,
    ProductPageComponent,
    AuthorizedChannelPageComponent,
    DetailSupplierComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeMaterialModule
  ]
})
export class HomeModule { }
