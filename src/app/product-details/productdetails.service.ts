import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  url = 'http://localhost:4000/login/dashboard/product/'
    url1 ='http://localhost:4000/MRlogin/cart'

    constructor(private httpClient: HttpClient) { }  

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,mrid:number,productID:number)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            mrid:mrid,
            productID:productID
        }
      console.log(this.url1,body)
        return this.httpClient.post(this.url1,body)
    }


}
