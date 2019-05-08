import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from '../events/shared/event.service';
import {map} from 'rxjs/operators';
@Injectable()
export class EventsListResolver implements Resolve<any>{
    resolve() {
        return this.eventService.getEvents().pipe(map(events=>events));
    }
    constructor(private eventService : EventService){

    }

}