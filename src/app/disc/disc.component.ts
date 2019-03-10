import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit {

  private classDisc = 'stop';
  private classBtn = 'green';
  private icon = 'fas fa-play';
  private text = 'Play';

  constructor() { }

  ngOnInit() {
  }


  playStop() {
    if (this.classDisc === 'play') {
      this.classDisc = null;
      this.icon = "fas fa-play";
      this.text = "Play";
      this.classBtn = 'green';
    } else {
      this.classDisc = 'play';
      this.icon = "fas fa-stop";
      this.text = "Stop";
      this.classBtn = 'red';
    }
  }

}
