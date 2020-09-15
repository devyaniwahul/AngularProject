import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdduserService } from './adduser.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  username: string
  firstname: string
  lastname: string
  joindate: string
  phoneno: string
  email: string 
  password: string

  service: AdduserService
  constructor(private router: Router,
      userservice: AdduserService ) { 
          this.service =  userservice
      }

  back()
  {
      this.router.navigate(['/login/dashboard/user'])
  }
  onadd()
  {
      this.service.addUsers(this.username,this.firstname,this.lastname,this.joindate,
          this.phoneno,this.email,this.password).subscribe((response)=>{
              if(response['status']=='success')
              {
                  alert('added user')
              }
              else
              {
                  console.log(response['error'])
                  alert('error')
              }
          })
  }
  ngOnInit() { }


}
