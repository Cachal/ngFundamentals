//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

//Components
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

//Routes
import { userRoutes } from './user.routes';



@NgModule(
    {
        imports: [
            CommonModule,
            RouterModule.forChild(userRoutes),
            FormsModule

        ],
        declarations: [
            ProfileComponent,
            LoginComponent
        ],


        providers: [

            
        ]
    }
)

export class UserModule {

}