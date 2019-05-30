import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";
@Directive({
  selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
    private el : HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, private ref : ElementRef) {
      this.el = ref.nativeElement;
  }
  ngOnInit() {
      this.el.addEventListener('click',e=>{
        this.$('#simple-modal').modal({})
      })
      
  }
}
