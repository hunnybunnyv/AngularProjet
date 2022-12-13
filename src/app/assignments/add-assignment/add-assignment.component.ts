import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  
  nomDevoir:string = "";
  dateDeRendu!:Date;

  @Input() assignments!: Assignment[];
  
    constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("onSubmit dans add-assignment")
    const newAssignment = new Assignment();

    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    // this.assignments.push(newAssignment);
    this.nouvelAssignment.emit(newAssignment);

  }
}
