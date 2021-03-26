import { Component } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { MapPointsComponent } from './components/map-points/map-points.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'road-travel-app';
}
