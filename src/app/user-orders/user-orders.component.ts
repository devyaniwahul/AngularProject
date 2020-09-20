import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrdersService } from './User-Orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  fullname = ''
  phoneno =''
  OrderDate: String = ''
  deliveryDate:String = ''
  PaymentMode = 1
  state = ''
  city = ''
  pincode: String = ''
  address = ''
 
  

  constructor(private router: Router,
      private service: UserOrdersService,
      private service1: UserOrdersService,
      ) { 
  
      }

      
  onadd()
  {
      const phoneno1:String = String(this.phoneno)
      const pincode1:String = String(this.pincode)
      if(this.fullname.length == 0){
          alert('fullname can not be empty')
      }
      else if(phoneno1.length == 0 || phoneno1.length != 10){
          alert('phone no is empty or not a 10 digits')
      }
      else if(this.OrderDate.length == 0){
          alert('OrderDate is invaild')
      }
      else if(this.deliveryDate.length == 0){
          alert('DeliveryDate is invaild')
      }
      else if(this.state.length == 0){
          alert('state can not be empty')
      }
      else if(this.city.length == 0){
          alert('city can not be empty')
      }
      else if(pincode1.length == 0 || pincode1.length != 6){
          alert('invaid pincode')
      }
      else if(this.address.length == 0){
          alert('Adress can not be empty')
      }
      else{
      
         
          if(confirm('Are you sure ? Once Ordered can not be canceled' ))
          {   
                  const mrid = localStorage['id']

                  const addressOFUser = this.address +', ' + this.city +', ' + this.state +', ' + this.pincode
                  const prname = this.fullname
                  const phoneno = this.phoneno

                  this.service1.InsertLocation(this.fullname,this.phoneno,this.state,this.city,this.pincode,this.address,mrid)
                  .subscribe((response1) =>{
                      if(response1['status'] == 'success'){
                          console.log('')
                      }
                      else{
                          console.log(response1['error'])
                      }
                  })

                

                  this.service.UpdateOrders(this.OrderDate,this.deliveryDate,this.PaymentMode,mrid,prname,addressOFUser,phoneno)
                  .subscribe((response)=>{
                          if(response['status']=='success')
                          {
                              alert('success')
                              this.router.navigate(['/MRlogin/cart'])
                          }
                          else
                          {
                              console.log(response['error'])
                              alert('error')
                          }
                      })
          }
      }
     
  }

  ngOnInit() { }


}
