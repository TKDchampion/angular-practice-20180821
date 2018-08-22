import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() list: any[];
  fontSize: number = 24;
  constructor() { }

  ngOnInit() {
  }

  enlarge(){
    ++this.fontSize;
  }
}
