// import { NgModule } from "@angular/core";
// import { MatListModule } from "@angular/material/list";
// import { AssignmentsComponent } from "./assignments.component";

// @NgModule({
//   declarations: [],
//   imports: [
//     MatListModule
//   ],
//   providers: [],
//   bootstrap: [AssignmentsComponent]
// })
export class Assignment {
    // deleteAssignment(assignmentTransmis: Assignment) {
    //   throw new Error('Method not implemented.');
    // }
    nom!:string;
    dateDeRendu!:Date;
    rendu!:boolean;
}



