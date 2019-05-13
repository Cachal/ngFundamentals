import {Component} from '@angular/core';
<<<<<<< HEAD
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
=======
import { AuthService } from './auth.service';
import {Router} from '@angular/router'

>>>>>>> 85eccf6d6eb47ee263a8b062847c4ef5dfc49630
@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent{
<<<<<<< HEAD
    constructor(private authService : AuthService,
                private router : Router){
=======
    constructor(public authService: AuthService,
                private router:Router )
    {
>>>>>>> 85eccf6d6eb47ee263a8b062847c4ef5dfc49630

    }
    login(formValues)
    {
<<<<<<< HEAD
       this.authService.loginUser(formValues.userName, formValues.password)
       this.router.navigate(['/events']);
    }
    cancel(){
        this.router.navigate(['/events' ]);
=======
        this.authService.loginUser(formValues.userName, 
            formValues.password);
        this.router.navigate(['events'])     
        
    }
    cancel()
    {
        this.router.navigate(['events'])     
        
>>>>>>> 85eccf6d6eb47ee263a8b062847c4ef5dfc49630
    }
}