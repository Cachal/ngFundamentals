import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,  Router} from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
    canActivate(route : ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if(!eventExists)
        {
            this.router.navigate(['/404']);
            
        }
        return eventExists;
    }
       
    constructor(private eventService : EventService,
        private router : Router){

    }  
}