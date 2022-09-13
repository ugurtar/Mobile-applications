import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(public router: ActivatedRoute, public routerNavigate: Router)
   { 
    
  }
  
  ngOnInit() {
  var normal = this.router.snapshot.queryParamMap.get('normal');
  var redGreenBlindness = this.router.snapshot.queryParamMap.get('redGreenBlindness');
  var allBlindness = this.router.snapshot.queryParamMap.get('allBlindness');

  let result = "";
  if(Number(normal) == 16) {
    result="Your all answers are true, probably you do not have any kind of Color Blindness";
  } else {
    if(Number(redGreenBlindness) > 0) {
      result="You may have Red-Green Color Blindness";
    }
    if(Number(redGreenBlindness) > 0 && Number(allBlindness) > 0) {
      result = result + " and ";
    }
    if(Number(allBlindness) > 0) {
      result = result + "You may have Typically Color Blindness";
    }
  }
  
  document.getElementById("lblResult").innerHTML = result;
  document.getElementById("lblRight").innerHTML = "Number of right questions :  " + normal;
  document.getElementById("lblWrongRG").innerHTML = "Wrong answer of Reg-Green Color Blindness : " + redGreenBlindness;
  document.getElementById("lblWrongAll").innerHTML = "Number of wrond questions : " + allBlindness;
  }
  
  goToHome() {
    this.routerNavigate.navigateByUrl('home');
  }
 
  goToTest() {
    this.routerNavigate.navigateByUrl('home');
    // this.routerNavigate.navigateByUrl('test-pages');
  }
}
