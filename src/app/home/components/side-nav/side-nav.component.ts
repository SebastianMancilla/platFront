import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
  ]
})
export class SideNavComponent {
  sidebarVisible: boolean = false;

  constructor(
    private router: Router,
  ) { }

  goHome() {
    this.router.navigateByUrl('/platform')
  }
  goToSuppliers() {
    this.router.navigateByUrl('/platform/supplier')
  }
  goToProducts() {
    this.router.navigateByUrl('/platform/product')
  }
  goToChannels() {
    this.router.navigateByUrl('/platform/authorized-channel')
  }
}
