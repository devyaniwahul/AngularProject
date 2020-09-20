import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EditproductService {

  url = 'http://localhost:4000/login/dashboard/product/edit_product'

  constructor(private http: HttpClient,private http1:HttpClient) { }
  

  edit_Product(
      name: String,
      price: number,
      discount: number,
      priceWithDiscount: number,
      quantity: Date,
      description: String,
      categoryid: number,

      id: number
  )
  {
      const body={
          name:name,
          price:price,
          discount:discount,
          priceWithDiscount:priceWithDiscount,
          quantity:quantity,
          description:description,
          categoryid:categoryid,

          id:id
      }


  return this.http.put(this.url + '/' + id, body)
  }

  
  getUserDetails(id:number)
  {
      return this.http.get(this.url + '/' + id)
  }

 
  
}
