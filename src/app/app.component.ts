import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  launchData: any;

  constructor (
    private spaceXApiService: SpaceXApiService
  ) { }

  ngOnInit() {
    this.spaceXApiService.load().subscribe(data => {
      console.log("data: ", data);
      this.launchData = data;
    })
  }
}
