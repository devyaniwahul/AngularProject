import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  http: HttpClient
    url = 'http://localhost:4000/login/dashboard/product'   //express port 4000

    constructor(httpClient: HttpClient, private http1:HttpClient) {
        this.http = httpClient
     }

     
     addService( 
        name: string,
        price: string,
        discount:string,
        priceWithDiscount:string,
        description: string,
        quantity: string,
        ratings: string,
        image: any,

        ){
        
        const body = new FormData()
        body.append('name', name)
        body.append('price',price)
        body.append('discount',discount)
        body.append('priceWithDiscount',priceWithDiscount)
        body.append('description',description)
        body.append('quantity',quantity)
        body.append('ratings',ratings)
        body.append('image',image)

        return this.http.post(this.url, body)
    } //end of addservive
 
}
