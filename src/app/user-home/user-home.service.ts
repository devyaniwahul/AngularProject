import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  url = 'http://localhost:4000/login/dashboard/product'
  constructor(private httpClient: HttpClient) { }
  

   getAllProducts() {
      return this.httpClient.get(this.url)
    }
  

   getproduct()
   {
       return this.httpClient.get(this.url)
   }
   
}
