import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllOrderListService } from './all-order-list.service';

@Component({
  selector: 'app-all-order-list',
  templateUrl: './all-order-list.component.html',
  styleUrls: ['./all-order-list.component.css']
})
export class AllOrderListComponent{

  products: any[]
    mrid:number
    date:Date
   // status:String

    constructor(private router: Router,
        ProductService: AllOrderListService,
        private service : AllOrderListService) {

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
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
          
        } else {
          alert('error')
        }
      })
  }

 


}
