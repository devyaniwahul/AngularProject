import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from './add-product.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    //public selectedFile;
    imgURL: any;
  cat = []

    categoryid = ''
    name: string
    price: string
    discount:string
    priceWithDiscount:string
    description: string
    quantity: string
    ratings:string
    image: any

    service: AddProductService
    constructor(private router: Router,
        productservice: AddProductService,
        private catservice:AddProductService) { 
            this.service = productservice
        }

    back()
    {
        this.router.navigate(['/login/dashboard/product'])
    }
    addProduct()
    {
        
        this.service.addService(this.name,this.price, this.discount, this.priceWithDiscount, this.description,this.quantity,
        this.ratings,this.image
        ).subscribe((response)=>{
                if(response['status']=='success')
                {
                    alert('added product')
                }
                else
                {
                    console.log(response['error'])
                    alert('error')
                }
            })
    }



     onSelectImage(event)
     {
         this.image = event.target.files[0]
         let reader = new FileReader();
         reader.readAsDataURL(event.target.files[0]);
         reader.onload = (event2) => {
           this.imgURL = reader.result;
         };
     }

     
}
