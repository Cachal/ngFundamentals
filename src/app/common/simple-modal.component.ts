import {Component, Input, Inject, ViewChild, ElementRef} from "@angular/core";
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: "simple-modal",
  template: `
    <div id='{{elementId}}' #modalContainer class="modal fade" tabindex="-1" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body" (click)='closeModal()'>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles :
  [`.modal-body {height : 250px;overflow-y:scroll;}`]
})
export class SimpleModalComponent {
    @Input() title:string;
    @Input() elementId : string;
    //this property controls the closing of the modal. It is passed as a variable
    // and is used in the closeModal() method. 
    @Input() closeOnBodyClick: string;
    //Creating a view child with a local variable. The same implementation has been done
    // in modal-trigger but using Element Ref
    @ViewChild('modalContainer') containerEl : ElementRef;

    constructor(@Inject(JQ_TOKEN)private $ : any){

    }
    closeModal(){
      if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
        this.$(this.containerEl.nativeElement).modal('hide');
      }
     
    }
}
