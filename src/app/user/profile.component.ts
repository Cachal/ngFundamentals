import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  constructor(authService: AuthService){

  }
 
  ngOnInit()  {
    let firstName = new FormControl();
    let lastName = new FormControl();
    this.profileForm =  new FormGroup({
      firstName : firstName,
      lastName: lastName
    })
  }
       
}