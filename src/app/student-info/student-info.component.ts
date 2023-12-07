import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {
  @Output() studentNameEmitter = new EventEmitter<string>();
  @Output() studentCertificateSoughtEmitter = new EventEmitter<string>();
  @Output() studentPronounEmitter = new EventEmitter<string>();

  setStudentName( $event: any ){
    this.studentNameEmitter.emit( $event.target.value );
  }

  setStudentCertificateSought($event: any) {
    this.studentCertificateSoughtEmitter.emit( $event.target.value );
  }

  setStudentPronoun( $event: any ){
    this.studentPronounEmitter.emit( $event.target.value );
  }

}
