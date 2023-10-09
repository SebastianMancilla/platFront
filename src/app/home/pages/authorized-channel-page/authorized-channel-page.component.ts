import { Component } from '@angular/core';
import { Channel } from '../../models/supplier-response.model';
import { SupplierService } from '../../service/supplier.service';

@Component({
  selector: 'app-authorized-channel-page',
  templateUrl: './authorized-channel-page.component.html',
  styles: [
  ]
})
export class AuthorizedChannelPageComponent {
  channels!: Channel[];
  constructor(private supplierService: SupplierService){}
  ngOnInit(): void {
    this.supplierService.getAuthorizedChannels().subscribe(channels => this.channels = channels);
  }
}
