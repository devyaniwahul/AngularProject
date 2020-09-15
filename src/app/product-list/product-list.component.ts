import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any[]


    constructor(private router: Router,
        Productservice: ProductService,
       private service : ProductService) {

            
            Productservice.getproduct().subscribe((response)=>{
                if(response['status']=='success')
                {
                    this.products = response['data']         
                }
                else{
                    alert('error')
                    console.log(response['error'])
                    
                }
         })
         this.loadAllProducts()
    }

    onAddProduct()
    {
        this.router.navigate(['/login/dashboard/product/add_product'])
    }

    dashboard()
    {
        this.router.navigate(['/login/dashboard'])
    }


  loadAllProducts() {
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

   ondelete(productId: number) {
        this.service
          .deleteProduct(productId)
          .subscribe(response => {
            if (response['status'] == 'success') {
              this.loadAllProducts()
            } else {
              console.log(response['error'])
            }
          })
      }

      
   onSelect(id: number)
   {
       this.router.navigate(['/login/dashboard/product/edit_product/'+id])
   }

}
