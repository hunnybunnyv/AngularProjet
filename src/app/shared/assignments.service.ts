import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

  assignments:Assignment[]=[
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu: true
    },
    {
      nom: "Devoir JAVA à rendre",
      dateDeRendu: new Date('2022-09-10'),
      rendu: false
    },
  ];
  
  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment ajouté");
  }

  updateAssignment(assignment:Assignment): Observable<string> {
    this.assignments.forEach((a, index) => {
      if (a === assignment) {
        this.assignments[index] = assignment;
      }
    });
    return of("Assignment modifié!")
  }

  deleteAssignment(assignment:Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of("Assignment supprimé!")
  }
}
