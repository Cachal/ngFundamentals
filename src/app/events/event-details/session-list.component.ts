import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";


@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html",
  styles: [
    `
      collapsible-well h6 {
        margin-top: -5px;
        margin-bottom: 10px;
      }
    `
  ]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSessions.sort(sortByNamesAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  filterSessions(filter: string) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(x => {
        return x.level.toLocaleLowerCase() === filter;
      });
    }
  }
  
}
function sortByNamesAsc(s1:ISession, s2:ISession): number {
    if(s1.name>s2.name) return 1;
    else if(s1.name===s2.name) return 0;
    else return -1;
  }
function sortByVotesDesc(s1:ISession, s2:ISession): number {
    return s2.voters.length - s1.voters.length; 
  }
