import { Component, EventEmitter, Output } from '@angular/core';

type Instructor = {
  Name: string,
  CertificateNumber: string,
  CertificateType: string,
  CertificateExpiration: string,
};

@Component({
  selector: 'app-instructor-info',
  standalone: true,
  imports: [],
  templateUrl: './instructor-info.component.html',
  styleUrl: './instructor-info.component.css',
})
export class InstructorInfoComponent {

  @Output() dateEmitter = new EventEmitter<string>();
  @Output() instructorEmitter = new EventEmitter<Instructor>();

  Instructor:Instructor = {
    Name: '',
    CertificateNumber: '',
    CertificateType: '',
    CertificateExpiration: '',
  };;

  setExpiration($event: any) {
    this.Instructor.CertificateExpiration = $event.target.value;
    this.instructorEmitter.emit(this.Instructor);
  }
  setType($event: any) {
    this.Instructor.CertificateType = $event.target.value;
    this.instructorEmitter.emit(this.Instructor);
  }
  setNumber($event: any) {
    this.Instructor.CertificateNumber = $event.target.value;
    this.instructorEmitter.emit(this.Instructor);
  }
  setName($event: any) {
    this.Instructor.Name = $event.target.value;
    this.instructorEmitter.emit(this.Instructor);
  }

  setDate($event: any) {
    this.dateEmitter.emit( $event.target.value );
  }

}
