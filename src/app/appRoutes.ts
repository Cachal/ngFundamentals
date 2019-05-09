import { Routes } from '@angular/router'
import { Error404Component } from './Errors/404.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import {
    EventDetailsComponent,  
    EventsListResolver,
    CreateEventComponent,
    EventRouteActivator,
    EventsListComponent
    
  } from './events/index';


export const appRoutes: Routes = [
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
    },
    {
        path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },

    {
        path: 'events', component: EventsListComponent, resolve:
            { events: EventsListResolver }
    },

    {
        path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },

    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },

]