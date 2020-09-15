import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserOrdersService {

  http: HttpClient
    url1 = 'http://localhost:4000/MRlogin/cart/confirmorder'   //express port 4000

   
    
    constructor(httpClient: HttpClient) {
        this.http = httpClient
       
        console.log(this.url1);
     }

     
     UpdateOrders(
        OrderDate:String,
        deliveryDate:String,
        PaymentMode: number,
        mrid:number,
        name:String,
        addressOFUser:String,
        phoneno:String

        )
        
        {
        
        const body = {
            OrderDate:OrderDate,
            deliveryDate:deliveryDate,
            PaymentMode:PaymentMode,
            mrid:mrid,
            name:name,
            addressOFUser:addressOFUser,
            phoneno:phoneno
            
        }

        return this.http.put(this.url1, body)
    } 


    InsertLocation(fullname:String,phoneno:String,state:String,city:String,pincode:String,address:String,mrid:number)
    {
        const body = {
            fullname:fullname,
            phoneno:phoneno,
            state:state,
            city:city,
            pincode:pincode,
            address:address,
            mrid:mrid
        }

        return this.http.post(this.url1, body)
    }


}
