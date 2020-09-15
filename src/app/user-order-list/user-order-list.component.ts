import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOrderListService } from './User-Order-List.service';


@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent {

  products: any[]
    mrid:number
    date:Date
   // status:String

    constructor(private router: Router,
        productservice: UserOrderListService,
        private service : UserOrderListService) {

         this.loadAllProducts()
         
    }
 

    ondelete(id: number) {
      console.log(id)
      if(confirm('Are you sure to delete an item'))
      {
          this.service
            .deleteProduct(id)
            .subscribe(response => {
              if (response['status'] == 'success') {
                window.location.reload()
                //this.loadAllProducts()
              } else {
                console.log(response['error'])
              }
            })
        }
      }

  loadAllProducts() {

    this.date = new Date()
  
    this.mrid = localStorage['id']
    this.service
      .getAllProducts(this.mrid)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
          
        } else {
          alert('error')
        }
      })
  }

 
}
