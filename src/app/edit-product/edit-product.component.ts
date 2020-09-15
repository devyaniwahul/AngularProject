import { Component, OnInit } from '@angular/core';
import { EditproductService } from './editproduct.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  
  name = ''
  price = 0
  discount = 0
  priceWithDiscount = 0
  quantity = null
  description = ''
  id = 0


    constructor(
        private service: EditproductService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private catservice: EditproductService) {

            this.id = this.activatedRoute.snapshot.params['id']

            if(this.id)
            {
                this.service.getUserDetails(this.id).subscribe(response =>{
                    if(response['status']=='success')
                    {
            
                        const user = response['data']

                        this.name = user[0].name
                        this.price = user[0].price
                        this.discount = user[0].discount
                        this.priceWithDiscount = user[0].priceWithDiscount
                        this.quantity = user[0].quantity
                        this.description = user[0].description
                    }
                    else{
                        console.log(response['error'])
                    }
                })
            }
         }

    ngOnInit() {
     }



   


    onUpdate() {
        this.service
          .edit_Product(this.name, this.price, this.discount, this.priceWithDiscount ,this.quantity,this.description, this.id)
          .subscribe(response => {
            if (response['status'] == 'success') {
                alert('product-updated')
              this.router.navigate(['/login/dashboard/product'])
            } else {
                console.log(response['error'])
                alert("error")
            }
          })
      }
}
