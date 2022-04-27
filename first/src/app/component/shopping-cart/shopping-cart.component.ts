import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
interface Product {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [
    {
      sno: 'AA101',
      name: 'mi band',
      image: 'https://m.media-amazon.com/images/I/615SPJtMafL._SX679_.jpg',
      price: 1550,
      qty: 2,
    },
    {
      sno: 'AA102',
      name: 'oneplus watch',
      image:
        'https://image01.oneplus.net/ebp/202103/12/1-m00-21-ed-rb8bwmbk1tiauby9aafkb6ixcai979.png',
      price: 30000,
      qty: 2,
    },
    {
      sno: 'AA103',
      name: 'Apple watch',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171067000%2C1631661671000',
      price: 11100,
      qty: 2,
    },
    {
      sno: 'AA104',
      name: 'Boat watch',
      image: 'https://m.media-amazon.com/images/I/617ysOitciL._SX679_.jpg',
      price: 3000,
      qty: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public incrQty(ProductId: string): void {
    this.products = this.products.map((product: Product) => {
      if (product.sno === ProductId) {
        return {
          ...product,
          qty: product.qty + 1,
        };
      }
      return product;
    });
  }
  public decrQty(ProductId: string): void {
    this.products = this.products.map((product: Product) => {
      if (product.sno === ProductId) {
        return {
          ...product,
          qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
        };
      }
      return product;
    });
  }
  public calcGrandTotal(): number {
    let total: number = 0;
    for (let product of this.products) {
      total += product.qty * product.price;
    }
    return total;
  }
}
