import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  // assignementSelectionne:Assignment;
  @Input() assignmentTransmis!: Assignment;

  constructor(private assignmentsService : AssignmentsService) { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis);
  }

  
  // assignmentClique(assignment:Assignment) {
  //   this.assignementSelectionne = assignment;
  // }
}
