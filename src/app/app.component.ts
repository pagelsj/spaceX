import { Component, OnInit } from '@angular/core';

import { LaunchModel } from './interfaces/index';
import {
  SpaceXApiService,
  ManipulateDataService
} from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  launchData: Array<LaunchModel>;

  constructor (
    private spaceXApiService: SpaceXApiService,
    private dataService: ManipulateDataService
  ) { }

  ngOnInit() {
    this.spaceXApiService.load().subscribe(data => {
      console.log("data: ", data);
      this.launchData = this.dataService.all(data);
    })
  }
}
