import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Points } from 'src/app/models/models';
import { AppService } from 'src/app/services/app-services';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input()
  point!: Points;

  @Input()
  index!: number;

  openChange: boolean = false;

  constructor(private appService: AppService) { }

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
