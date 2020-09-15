import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email1 = ''
    password1 = ''

    constructor(private router: Router) { }

    onlogin()
    {
        if(this.email1 == "devyani@gmail.com" && this.password1 == "1234"){
            this.router.navigate(['/login/dashboard'])
        }
        else
        {
            alert('enter the vaild password')
        }
        
    }
    
    ngOnInit() { }

}
