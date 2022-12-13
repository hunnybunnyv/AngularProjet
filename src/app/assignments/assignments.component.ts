import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !"
  ajoutActive = false;
  formVisible = false;
  assignmentSelectionne!:Assignment;
  assignments!: Assignment[];
  
  constructor (private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
    // this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments();  
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.ajoutActive = true;
  //   }, 2000);
  // }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onNouvelAssignment(event:Assignment) {
    // this.assignments.push(event);
    this.assignmentsService.addAssignment(event)
      .subscribe((message) => console.log(message));

    this.formVisible = false;
 }

}

