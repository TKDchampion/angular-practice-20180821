import { Component } from '@angular/core';
import { CarServiceService } from './car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any
  listOriginal: any
  constructor(private carService: CarServiceService){
    carService.getData().subscribe(resp => {
      this.listOriginal = this.list = resp
    })
  }
  searchKeyword($event) {
    this.list = $event ? this.listOriginal.filter(i => i.name.includes($event)) : this.listOriginal
  }

}
