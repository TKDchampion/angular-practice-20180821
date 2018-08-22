import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  @Output() keywordChanges = new EventEmitter<string>();
  title = "汽車誌"
  keyword = "請輸入關鍵字"
  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log(this.keyword)
    this.keywordChanges.emit(this.keyword)
  }

}
