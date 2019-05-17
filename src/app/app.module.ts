import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {
  EventDetailsComponent,
  EventService,
  EventsListResolver,
  CreateEventComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventsListComponent,
  CreateSessionComponent,
  SessionListComponent
} from "./events/index";
import {ToastrService, CollapsibleWellComponent} from "./common/index";
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component";
import {appRoutes} from "./appRoutes";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./Errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    AuthService,
    EventsListResolver,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    AuthService
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(`You have not saved this event, do you really want 
    to cancel?`);
  return true;
}
