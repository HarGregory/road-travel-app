import { Component, OnInit } from '@angular/core';
import{Points, PointType} from 'src/app/models/models';
import { AppService } from 'src/app/services/app-services';
import { HotelComponent } from 'src/app/components/hotel/hotel.component';
import { PlaceComponent } from 'src/app/components/place/place.component';
import { VehicleComponent } from 'src/app/components/vehicle/vehicle.component';



@Component({
  selector: 'app-map-points',
  templateUrl: './map-points.component.html',
  styleUrls: ['./map-points.component.css']
})
export class MapPointsComponent implements OnInit {

  typePoints: PointType[] = [
    {code: 0, viewValue: 'Place', icon:'far fa-car'},
    {code: 1, viewValue: 'Hotel', icon:''},
    {code: 2, viewValue: 'Car Rentals',icon:'far fa-car'}
  ];
  points: Points[];

  constructor(private appService: AppService) { 
    this.points = appService.getData();
  }

  ngOnInit(): void {
  }

  CreateNewEvent(point_type:PointType){
    try{
      alert("Create new event " + point_type.viewValue);
    }
    catch(error){
      console.log(error);      
    }
  }

}
