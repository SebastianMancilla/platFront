import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Supplier } from '../interface/supplier.interface';
import { Channel, Product, SupplierResp } from '../models/supplier-response.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private base_url = environment.BASE_URL;

  constructor (
    private http: HttpClient,
  ) {}

  getSupplier(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${this.base_url}/supplier/`);
  }

  getSupplierByCode(id: string): Observable<SupplierResp>{
    return this.http.get<SupplierResp>(`${this.base_url}/supplier/${id}`);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.base_url}/product/`);
  }

  getAuthorizedChannels(): Observable<Channel[]>{
    return this.http.get<Channel[]>(`${this.base_url}/authorized-channel/`);
  }

}
