import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {
    
  }

  ngOnInit() {
    
  }

  goToTest() {
    this.router.navigateByUrl('test-pages');
  }
  goToInfo() {
    window.open('https://en.wikipedia.org/wiki/Color_blindness', '_system', 'location=yes');
  }
}
