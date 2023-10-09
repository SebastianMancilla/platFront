import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

  constructor(
    private router: Router,
  ){}

  goToSuppliers(){
    this.router.navigateByUrl('/platform/supplier')
  }
  goToProducts(){
    this.router.navigateByUrl('/platform/product')
  }
  goToChannels(){
    this.router.navigateByUrl('/platform/authorized-channel')
  }
}
