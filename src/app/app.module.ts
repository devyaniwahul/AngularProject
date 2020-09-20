import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './login/user.service';
import { CartService } from './cart/cart.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductService } from './add-product/add-product.service';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserHomeService } from './user-home/user-home.service';
import { MRloginComponent } from './mrlogin/mrlogin.component';
import { MRRegisterComponent } from './mrregister/mrregister.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartProductDetailsComponent } from './cart-product-details/cart-product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AllOrderListComponent } from './all-order-list/all-order-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {EditUserComponent}  from './edit-user/edit-user.component'
import { ProductdetailsService } from './product-details/productdetails.service';
import { AdduserService } from './add-user/adduser.service';

import { EditUserService } from './edit-user/edit-user.service';
import { EditproductService } from './edit-product/editproduct.service';
import { MRRegisterService } from './mrregister/mrregister.service';
import { CartproductdetailsService } from './cart-product-details/cartproductdetails.service';
import { UserOrdersService } from './user-orders/User-Orders.service';
import { UserOrderListService } from './user-order-list/User-Order-List.service';
import { AllOrderListService } from './all-order-list/all-order-list.service';
import { ProductService } from './product-list/product.service';

import { SearchProductComponent } from './search-product/search-product.component';
import { SearchproductService } from './search-product/searchproduct.service';


const routes: Route[] = [

  { path: '', redirectTo: '/MRlogin/home', pathMatch: 'full' },

 // the default component
// { path: '', component: AdminloginComponent },
{path :'MRlogin/home',component:UserHomeComponent},
 {path: 'login' , component: AdminloginComponent},
 {path: 'login/dashboard', component: DashboardComponent},

 { path: 'login/dashboard/user', component: LoginComponent },
 {path: 'login/dashboard/product',component: ProductListComponent},

 {path: 'login/dashboard/user/add_user',component: AddUserComponent},
 {path: 'login/dashboard/product/add_product',component: AddProductComponent},

 {path: 'login/dashboard/user/edit_user/:id',component: EditUserComponent },
 {path: 'login/dashboard/product/edit_product/:id',component: EditProductComponent },

 {path: 'MRlogin/home', component: UserHomeComponent, canActivate: [AppComponent]},
 {path: 'MRlogin', component: MRloginComponent},
 {path: 'MRlogin/product-details/:id', component: ProductDetailsComponent},
 {path: 'MRlogin/cart', component: CartComponent},
 {path: 'MRregister', component: MRRegisterComponent},
 {path: 'MRlogin/cartEdit/:id', component: CartProductDetailsComponent},
 {path: 'MRlogin/search', component: SearchProductComponent},

 {path: 'MRlogin/cart/placeorder', component: UserOrdersComponent},
 {path: 'MRlogin/orders', component: UserOrderListComponent},
 {path: 'MRlogin/dashboard/orders', component: AllOrderListComponent},
 {path: 'MRlogin/dashboard/MRorders/:id', component: UserOrderListComponent},
 


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    AddUserComponent,
    DashboardComponent,
    AddProductComponent,
    EditUserComponent,
    EditProductComponent,
    MRloginComponent,
    UserHomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    MRRegisterComponent,
    CartProductDetailsComponent,
    UserOrdersComponent,
    UserOrderListComponent,
    AllOrderListComponent,
    
    SearchProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [ 
    UserService,
    AddProductService,
    AppComponent,
    AddProductService,
    ProductService,
    CartService,
    ProductdetailsService,
    AdduserService,
    EditUserService,
    EditproductService,
  MRRegisterService,
    CartproductdetailsService,
UserHomeService,
UserOrdersService ,
UserOrderListService,
        AllOrderListService,
        
        SearchproductService,
        
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
