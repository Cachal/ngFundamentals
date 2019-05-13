import {Component} from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component(
    {
        selector: 'nav-bar',
        templateUrl : './navbar.component.html',
        styles:[`
            .nav .navbar-nav { font-size : 15px;}
            #searchForm {margin-right : 100px;}
            @media(max-width: 1200px){#searchForm {display:none}}
            li>a.active { color : #F97924;}
        `]
    }
)

export class NavBarComponent{
<<<<<<< HEAD
constructor(private authService: AuthService){
    
}
=======
    constructor(public authService : AuthService){

    }
    
>>>>>>> 85eccf6d6eb47ee263a8b062847c4ef5dfc49630
}