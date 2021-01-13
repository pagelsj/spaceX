import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'spacex-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  @Input() launch: any;
  constructor() { }

  ngOnInit() {
  }

}
