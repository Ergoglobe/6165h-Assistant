import { Component, Input } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-endorsement',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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
        
      }
  }
}
