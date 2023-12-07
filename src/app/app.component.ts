import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InstructorInfoComponent } from './instructor-info/instructor-info.component';
import { StudentInfoComponent } from "./student-info/student-info.component";
import { EndorsementComponent } from "./endorsement/endorsement.component";

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, InstructorInfoComponent, StudentInfoComponent, EndorsementComponent, MatListModule, MatDividerModule]
})
export class AppComponent {
  
  studentName: string = "[First name, MI, Last name]";
  studentPronoun: string = "[He is/She is/They are]";
  studentCertificateSought: string = "[applicable]";

  updateStudentName(newName:string) {
    this.studentName = newName;
  }

  updateStudentPronoun( newPronoun:string) {
    this.studentPronoun = newPronoun;
  }

  updateStudentCertificateSought( newCertificateSought:string ){
    this.studentCertificateSought = newCertificateSought;
  }

  title = '6165h-Assistant';
}
