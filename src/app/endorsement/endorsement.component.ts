import { Component, Input } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-endorsement',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './endorsement.component.html',
  styleUrl: './endorsement.component.css'
})
export class EndorsementComponent {
  @Input() number:string = "xx";
  title: string = "";
  endorsement: string = "";

  @Input() studentName: string = "";
  @Input() studentPronoun: string = "";
  @Input() studentCertificateSought: string = "";

  @Input() InstructorCredentials: string = "";

  ngOnInit(){
    this.populateEndorsement()
  }

  ngOnChanges() {
    this.populateEndorsement()
  }

  pastTensePronoun( pronoun: string):string {
    if ( pronoun != "[He is/She is/They are]" ) {
      if ( pronoun.includes("He")){
        return "He was";
      }
      else if ( pronoun.includes("She")){
        return "She was";
      } else {
        return "They were";
      }
    } else
    {
      return "[He or She] was";
    }
  }

  populateEndorsement(): void {
    switch( this.number) {
      case "A.1":
        this.title = "Prerequisites for practical test: Title 14 of the Code of Federal Regulations (14 CFR) part 61, § 61.39(a)(6)(i) and (ii).";
        this.endorsement = "I certify that " + this.studentName + " has received and logged training time within 2 calendar-months preceding the month of application in preparation for the practical test and " + this.studentPronoun + " prepared for the required practical test for the issuance of " + this.studentCertificateSought + " certificate."
        break;

      case "A.2":
        this.title = "Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required.";
        this.endorsement = "I certify that " + this.studentName + " has demonstrated satisfactory knowledge of the subject areas in which " + this.pastTensePronoun(this.studentPronoun) + " deficient on the " + this.studentCertificateSought + " airman knowledge test.";
        break;

      case "A.3":
        this.title = "Pre-solo aeronautical knowledge: § 61.87(b)";
        this.endorsement = "I certify that " + this.studentName + " has satisfactorily completed the pre-solo knowledge test of § 61.87(b) for the [make and model] aircraft.";
        break;

      case "A.4":
        this.title = "Pre-solo flight training: § 61.87(c)(1) and (2)";
        this.endorsement = "I certify that " + this.studentName + " has received and logged pre-solo flight training for the maneuvers and procedures that are appropriate to the [make and model] aircraft. I have determined [he or she] has demonstrated satisfactory proficiency and safety on the maneuvers and procedures required by § 61.87 in this or similar make and model of aircraft to be flown.";
        break;

      case "A.5":
        this.title = "Pre-solo flight training at night: § 61.87(o). Flight training must be received within the 90 calendar-day period preceding the date of the flight.";
        this.endorsement = "I certify that " + this.studentName + " has received flight training at night on night flying procedures that include takeoffs, approaches, landings, and go-arounds at night at the [airport name] airport where the solo flight will be conducted; navigation training at night in the vicinity of the [airport name] airport where the solo flight will be conducted. This endorsement expires 90 calendar-days from the date the flight training at night was received.";
        break;
            
    }
  }
}
