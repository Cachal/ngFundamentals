import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  EventDetailsComponent,
  EventService,
  EventsListResolver,
  CreateEventComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventsListComponent
  
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './appRoutes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Errors/404.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(`You have not saved this event, do you really want 
    to cancel?`);
  return true;
}