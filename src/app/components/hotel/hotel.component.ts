import { Component, OnInit, Input } from '@angular/core';
import{Hotel, Points, Place, Vehicle} from 'src/app/models/models';
import { AppService } from 'src/app/services/app-services';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input()
  point!: Points;

  @Input()
  index!: number;

  openChange: boolean = false;

  constructor(private appService: AppService,
    config: NgbRatingConfig) {
      config.max = 5;
      config.readonly = true;
     }


  ngOnInit(): void {
  }

  delete(){
    try{
      this.appService.deleteData(<number>this.index);
    }
    catch(error){
      console.log(error);
    }
  }

  change(){
    try{
      this.openChange = true;
    }
    catch(error){
      console.log(error);
    }
  }

  onOpenChangeEvent(close:boolean){
    try{
      this.openChange = false;
    }
    catch(error){
      console.log(error);
    }
  } 
}
