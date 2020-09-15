import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MRloginService } from './mrlogin.service';


@Component({
  selector: 'app-mrlogin',
  templateUrl: './mrlogin.component.html',
  styleUrls: ['./mrlogin.component.css']
})
export class MRloginComponent  {

  email = ''
  password = ''
  rememberme = false
  constructor(private router: Router,
    private service: MRloginService) { }

onlogin()
{
    if(this.email.length == 0)
    {
        alert('email field can not be empty')
    }
    else if(this.password.length == 0)
    {
        alert('password can not be empty')
    }
    else
    {

         this.service.login(this.email,this.password).subscribe((response)=>{
            
        
            console.log(response)
            if(response['status']=='success')
            {
            
                    localStorage['login_status'] = '1'
                    localStorage['username'] = response['data'][0].username
                    localStorage['id'] = response['data'][0].id
                    localStorage['flag'] = '0'

               
            
                this.router.navigate(['/MRlogin/home'])
            }
            else if(response['status']=='error')
            {

                alert('invaild email or password')
            }

       })

    }

}


}
