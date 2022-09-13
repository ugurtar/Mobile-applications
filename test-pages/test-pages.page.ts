import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-test-pages',
  templateUrl: './test-pages.page.html',
  styleUrls: ['./test-pages.page.scss'],
})
export class TestPagesPage implements OnInit {
  cards;
  selectedCardIndex = 0;
  normal = 0;
  redGreenBlindness = 0;
  allBlindness = 0;
  
  constructor(private alertController: AlertController,
    public router: Router) {
    let pictures: Array<object> = [];

    let obj: object = {};
    let pictureStartKey = "assets/pictures/";

    for (let i = 2; i < 18; i++) {
      obj = { img: pictureStartKey + i + ".jpg" };
      pictures.push(obj);
    }
    this.cards = pictures;
  }
  async presentAlert() {
    this.router.navigate(['/result'], { queryParams: {normal : this.normal,
      redGreenBlindness : this.redGreenBlindness,
      allBlindness : this.allBlindness}});
  }

  ngOnInit() {
  }

  logEvent(event, buttonId) {
    const newIndex = this.selectedCardIndex + 1;
//newIndex === this.cards.length
    if (newIndex === 16) {
      this.calculateScore(newIndex, buttonId);
      // this.calculateScoreFinal();
    } else {
      if(this.selectedCardIndex == 0)
      {}
      this.selectedCardIndex = newIndex;
      this.calculateScore(newIndex, buttonId);
      this.setButtons(newIndex);
    }
  }
  calculateScoreFinal() {
    this.presentAlert();
  }
  findButtonValue(buttonId) {
    let buttonKey = "button" + buttonId;
    return document.getElementById(buttonKey).innerText;
  }
  calculateScore(index, buttonId) {
    let selectedValue = this.findButtonValue(buttonId);
    switch (index) {
      case 1:
        if (selectedValue == "5") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 2:
        if (selectedValue == "7") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 3:
        if (selectedValue == "16") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 4:
        if (selectedValue == "73") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 5:
        if (selectedValue == "5") {
          this.redGreenBlindness++;
        } else if (selectedValue == "NOTHING") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 6:
        if (selectedValue == "45") {
          this.redGreenBlindness++;
        } else if (selectedValue == "NOTHING") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 7:
        if (selectedValue == "2" || selectedValue == "6") {
          this.allBlindness++;
        } else if (selectedValue == "26") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 8:
        if (selectedValue == "2" || selectedValue == "4") {
          this.allBlindness++;
        } else if (selectedValue == "42") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 9:
        if (selectedValue == "3") {
          this.redGreenBlindness++;
        } else if (selectedValue == "8") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 10:
        if (selectedValue == "79") {
          this.redGreenBlindness++;
        } else if (selectedValue == "29") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 11:
        if (selectedValue == "2") {
          this.redGreenBlindness++;
        } else if (selectedValue == "5") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 12:
        if (selectedValue == "5") {
          this.redGreenBlindness++;
        } else if (selectedValue == "3") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 13:
        if (selectedValue == "17") {
          this.redGreenBlindness++;
        } else if (selectedValue == "15") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 14:
        if (selectedValue == "21") {
          this.redGreenBlindness++;
        } else if (selectedValue == "74") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 15:
        if (selectedValue == "6") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        break;
      case 16:
        if (selectedValue == "45") {
          this.normal++;
        } else {
          this.allBlindness++;
        }
        this.calculateScoreFinal();
        break;
      default:
        // 
        break;
    }
  }

  setButtons(index) {
    switch (index) {
      case 1:
        document.getElementById("button1").innerText = "16";
        document.getElementById("button2").innerText = "9";
        document.getElementById("button3").innerText = "7";
        break;
      case 2:
        document.getElementById("button1").innerText = "16";
        document.getElementById("button2").innerText = "21";
        document.getElementById("button3").innerText = "65";
        break;
      case 3:
        document.getElementById("button1").innerText = "33";
        document.getElementById("button2").innerText = "55";
        document.getElementById("button3").innerText = "73";
        break;
      case 4:
        document.getElementById("button1").innerText = "27";
        document.getElementById("button2").innerText = "5";
        document.getElementById("button3").innerText = "9";
        break;
      case 5:
        document.getElementById("button1").innerText = "45";
        document.getElementById("button2").innerText = "78";
        document.getElementById("button3").innerText = "3";
        break;
      case 6:
        document.getElementById("button1").innerText = "2";
        document.getElementById("button2").innerText = "6";
        document.getElementById("button3").innerText = "26";//
        break;
      case 7:
        document.getElementById("button1").innerText = "42";//
        document.getElementById("button2").innerText = "2";
        document.getElementById("button3").innerText = "4";
        break;
      case 8:
        document.getElementById("button1").innerText = "7";
        document.getElementById("button2").innerText = "8";//
        document.getElementById("button3").innerText = "3";
        break;
      case 9:
        document.getElementById("button1").innerText = "29";
        document.getElementById("button2").innerText = "79";
        document.getElementById("button3").innerText = "65";
        break;
      case 10:
        document.getElementById("button1").innerText = "2";
        document.getElementById("button2").innerText = "5";//
        document.getElementById("button3").innerText = "7";
        break;
      case 11:
        document.getElementById("button1").innerText = "9";
        document.getElementById("button2").innerText = "5";
        document.getElementById("button3").innerText = "3";//
        break;
      case 12:
        document.getElementById("button1").innerText = "19";
        document.getElementById("button2").innerText = "17";
        document.getElementById("button3").innerText = "15";//
        break;
      case 13:
        document.getElementById("button1").innerText = "74";//
        document.getElementById("button2").innerText = "37";
        document.getElementById("button3").innerText = "21";
        break;
      case 14:
        document.getElementById("button1").innerText = "9";
        document.getElementById("button2").innerText = "5";
        document.getElementById("button3").innerText = "6";//
        break;
      case 15:
        document.getElementById("button1").innerText = "19";
        document.getElementById("button2").innerText = "45";
        document.getElementById("button3").innerText = "15";
        break;
      default:
        // 
        break;
    }
  }

}
