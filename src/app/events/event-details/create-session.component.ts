import {Component, OnInit, Output,EventEmitter} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ISession,restrictedWords} from "../shared/index";


@Component({
  selector:'create-session',
  templateUrl: "./create-session.component.html",
  styles: [
    `
      em {
        float: right;
        ,color: #e05c65;
        paddingleft: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error :: -webkit-input-placeholder {
        color: #999;
      }
      .error :: -moz-placeholder {
        color: #999;
      }
      .error :: -ms-input-placeholder {
        color: #999;
      }
    `
  ]
})

export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public level: FormControl;
  public abstract: FormControl;
  public newSessionForm: FormGroup;

  saveSession(formvalues) {
    let session: ISession = {
      id: undefined,
      name: formvalues.name,
      duration: +formvalues.duration,
      level: formvalues.level,
      presenter: formvalues.presenter,
      abstract: formvalues.abstract,
      voters: []
    };     
    this.saveNewSession.emit(session);
  }
  cancel(){
    this.cancelAddSession.emit();
  }
 

  ngOnInit() {
    (this.name = new FormControl("", Validators.required)),
      (this.presenter = new FormControl("", Validators.required)),
      (this.duration = new FormControl("", Validators.required)),
      (this.level = new FormControl("", Validators.required)),
      (this.abstract = new FormControl("", [
        Validators.required,
        Validators.maxLength(400),
        restrictedWords(["foo", "bar"])
      ]));

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
}