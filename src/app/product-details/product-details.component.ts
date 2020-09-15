import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from './productdetails.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any
    count: number = 1
    rate: number
    temp: number
    id: number
    totalDiscount: number
    mrid:number

    constructor(private service:ProductdetailsService,
        private activateRoute:ActivatedRoute,
        private CartService: ProductdetailsService,
        private route:Router) {
      
        this.id = this.activateRoute.snapshot.params['id']
      
        if(this.id)
        {
            this.service.getProduct(this.id).subscribe(response => {
                if(response['status']=='success')
                {
                    this.product = response['data'][0]
                    this.rate = this.product.priceWithDiscount
                    this.temp = this.rate
                }
            })

        }

     }


     OnIncrement()
     {
        this.count = this.count + 1
        this.rate = this.temp * this.count
     }

     OnDecrement()
     {
        if(this.count == 1)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
            this.rate = this.temp * this.count
        }
     }

     onAddToCart()
     {
         if(localStorage['login_status'] == '0'){
            alert('You need to login first')
            this.route.navigate(['/MRlogin'])
         }
         else
         {
             if(confirm('Do You want to add itmes'))
             {
                this.mrid = localStorage['id']
                this.totalDiscount = (this.product.price * this.count) - this.rate

                this.CartService.postInCart(this.count,this.rate,this.totalDiscount,this.mrid,this.id)
               .subscribe(response =>{
                if(response['status'] == 'success'){
                    alert('items added in your cart')
                  }
          })

         }        

        }
     }

     OnOrderNow()
     {

     }
     
     OnBack()
     {
            this.route.navigate(['/MRlogin/home'])
        
        
     }
    
    ngOnInit() { }

}
