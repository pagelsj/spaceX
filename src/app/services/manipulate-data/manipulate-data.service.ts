import { Injectable } from '@angular/core';
import { LaunchModel } from '../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class ManipulateDataService {

  constructor() { }

  all(data) {
    let response: Array<LaunchModel> = [];
    data.forEach(d => {
      console.log('d', d);
      response.push({
        mission_name: d.mission_name,
        launch_date: d.launch_date_utc,
        rocket_name: d.rocket.rocket_name,
        rocket_type: d.rocket.rocket_type,
        landed_success: !!d.rocket.first_stage.cores[0].land_success,
        customers: d.rocket.second_stage.payloads[0].customers.join(','),
        mission_patch: d.links.mission_patch_small
      });
      console.log('response', response);
    })
    return response;
  }
}


