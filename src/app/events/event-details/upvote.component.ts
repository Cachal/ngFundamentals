import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: "upvote",
  templateUrl:'/upvote.component.html',
  styleUrls: ["./upvote.component.css"]
})
export class UpvoteComponent {
    @Input() count : number;
    @Input() set voted(val){
      this.iconColor= val?'red':'white'
    }
    iconColor : string;
    @Output() vote = new EventEmitter();

    onClick(){
        this.vote.emit({});
    }

}
