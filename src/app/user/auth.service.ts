import {Injectable} from '@angular/core';
import {IUser} from './user.model';
<<<<<<< HEAD
Injectable()
export class AuthService{
    currentUser : IUser;
    loginUser(userName : string, password : string){
        this.currentUser = {
            id:1,
            userName : userName,
            firstName:"Bhuvan",
            lastName:"Chhetri" 
        }
    }

    isAuthenticated() : boolean {
=======
@Injectable()
export class AuthService  {
    currentUser : IUser;
    loginUser(userName: string , password : string){
        this.currentUser = {

            id:1,
            userName: userName,
            firstName: 'John',
            lastName : 'Papa'
        }
    }
    isAuthenticated(){
>>>>>>> 85eccf6d6eb47ee263a8b062847c4ef5dfc49630
        return !!this.currentUser;
    }
}