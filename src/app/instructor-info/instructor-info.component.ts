import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-info',
  standalone: true,
  imports: [],
  templateUrl: './instructor-info.component.html',
  styleUrl: './instructor-info.component.css'
})
export class InstructorInfoComponent {
  EndorsementDate: string = "12/06/2023"
  Instructor = {
    Name: "Bilal Asif Aslam",
    CertificateNumber: "4693690",
    CertificateType: "CFI",
    CertificateExpiration: "12/31/2023"
  }

}
