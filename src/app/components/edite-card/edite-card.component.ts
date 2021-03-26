import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Hotel, Points, Place, Vehicle} from 'src/app/models/models';
import { AppService } from 'src/app/services/app-services';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edite-card',
  templateUrl: './edite-card.component.html',
  styleUrls: ['./edite-card.component.css']
})
export class EditeCardComponent implements OnInit {

  @Input()
  point!: Points;

  @Input()
  index!: number;

  @Output() openChangeEvent = new EventEmitter<boolean>();
  
  time : string = "";
  startTime : string = "";

  constructor(private appService: AppService) {
     }


  ngOnInit(): void {
    this.time = this.point.st;
    this.startTime  = this.point.st;
  }

  myDateParser(dateStr : string, flagStatus : boolean) : string {
    let date = dateStr.substring(0, 10);
    let houre = dateStr.substring(11, 13);
    let minute = dateStr.substring(14, 19);

    if(flagStatus){
      if(minute == "00"){
        houre = (Number(houre) - 1).toString();
        if(houre.length == 1){
          houre = "0" + houre;  ;
        }
        minute= "60";
        minute = (Number(minute) - 1).toString();
      }
      else{
        minute = (Number(minute) - 1).toString();
        if(minute.length == 1){
          minute = "0" + minute;
        }
      }
    }
    else{
      if(minute == "59"){
        minute = "00";
        houre = (Number(houre) + 1).toString();
      }
      else{
        minute = (Number(minute) + 1).toString();
        if(minute.length == 1){
          minute = "0" + minute;
        }
      }
    }
    let validDate = date + 'T' + houre +':'+ minute;
    return validDate
  }

  decrement (){
    try{
      this.time = this.myDateParser(this.time, true);
      this.point.st = this.time;
    }
    catch(error){
      console.log(error);
    }
  }

  increment (){
    try{
      this.time = this.myDateParser(this.time, false);
      this.point.st = this.time;
    }
    catch(error){
      console.log(error);
    }
  }

  decrementDuration (){
    try{
    }
    catch(error){
      console.log(error);
    }
  }

  incrementDuration (){
    try{
    }
    catch(error){
      console.log(error);
    }
  }


  closeEdite(){
    try{
      this.point.st = this.startTime;
      this.openChangeEvent.emit(false);
    }
    catch(error){
      console.log(error);
    }
  }

  saveEdite(){
    try{
      this.point.st = this.time;
      this.openChangeEvent.emit(false);
    }
    catch(error){
      console.log(error);
    }
  }
}
