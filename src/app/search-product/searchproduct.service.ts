import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchproductService {

  url = 'http://localhost:4000/MRlogin/search'
    constructor(private httpClient: HttpClient) { }
    

     getSearch(ProductName:String) {

         const body = {
            ProductName:ProductName
         }

        return this.httpClient.post(this.url,body)
      }
    
     
}
