import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit {

  private action = false;

  constructor() { }

  ngOnInit() {
  }


  playStop() {

    this.action = !this.action;

  }

}
