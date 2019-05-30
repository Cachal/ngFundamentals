import { Injectable } from '@angular/core';
import { ISession } from '../shared';
@Injectable()
export class VoterService{
    deleteVoter( session: ISession,voterName: string){
        session.voters= session.voters.filter(voter=>voter!==voterName);
    }
    addVoter(session : ISession, voterName : string){
        session.voters.push(voterName)
    }
    userHasVoted(session : ISession, voterName : string){
        //using some() function. An inbuilt javascript function that returns true if it finds any element that matches its parameters. 
        return session.voters.some(voter=>voter===voterName)
    }
}