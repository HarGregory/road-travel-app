import { Component, OnInit, Input } from '@angular/core';
import { Points } from 'src/app/models/models';
import { AppService } from 'src/app/services/app-services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

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
