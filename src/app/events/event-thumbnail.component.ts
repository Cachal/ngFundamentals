import {Component,Input, EventEmitter} from '@angular/core'

import { IEvent } from './shared';


@Component(
    {
        selector:'event-thumbnail',
        template: `
        <div [routerLink]="['/events',event.id]" class = "well hoverwell thumbnail">
        <h2>{{event?.name|uppercase}}</h2>
        <div>Date: {{event?.date| date :'shortDate'}} </div>
        <div [ngClass]="getClass()" [ngSwitch] = "event?.time">Time: {{event?.time}}
            <span *ngSwitchCase = "'8:00 am'" >(Early Start)</span>
            <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price|currency :'USD'}}</div>
        <div *ngIf = "event?.location">
            <span>Location: {{event?.location?.address}}</span>          
            <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div> 
        <div *ngIf = "event?.onlineUrl">
            <span>Online URL: {{event?.onlineUrl}}</span>
        </div>  
       
    </div>
        `,
        styles: [
            `.pad-left {margin-left:10px;}
            .thumbnail {min-height : 210px;}
            .well {color: #bbb;}
            .green {color: #003300 !important; font-weight: bold;}
            .bold {font-weight: bold; color: black;}`
        ]
    }
)

export class EventThumbnailComponent{
   @Input() event: IEvent
   
   getClass()
   {
       const isEarlyStart = this.event.time === '8:00 am';
       const isLateStart = this.event.time === '10:00 am';
       return {green: isEarlyStart, bold: isLateStart};
   }
}