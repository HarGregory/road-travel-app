import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Points } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  
  exampleData : any = [
    {
      type: 'car-rental',
      title: 'Mercedes Benz',
      st: '2020-10-02T20:00',
      vehicle: {
        type: 'E Class',
        gearbox: 'A',
        ac: true,
      },
    },
   
    {
      type: 'hotel',
      title: 'Relais du Silence Aux Vieux Remparts',
      st: '2020-10-02T20:00',
      hotel: {
        rating: '8.5',
        starRating: 5,
        category: 'Premium Hotel',
      },
    },
   
   
    {
      type: 'place',
      title: 'Hyde-park',
      st: '2020-10-02T20:00',
      place: {
        category: 'Park',
      },
    },
   ];

  points: Points[] = <Points[]>this.exampleData;
  
  constructor() { }

  getData(): Points[] {
    try{
      return this.points;
    }
    catch(error){
      console.log(error);
      return this.points;
    }
  }

  deleteData(index : number){
    try{
      this.points.splice(index, 1);
    }
    catch(error){
      console.log(error);
    }
  }

}