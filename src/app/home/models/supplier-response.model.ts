export interface SupplierResp {
  suppId:            number;
  name:              string;
  code:              string;
  notificationEmail: string;
  alertEmail:        string;
  products:          Product[];
  channels:          Channel[];
}

export interface Channel {
  channelId: number;
  code:      string;
  name:      string;
}

export interface Product {
  id:          number;
  code:        string;
  name:        string;
  description: string;
  amount:      number;
}
