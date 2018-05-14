import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Master } from '../master/master.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent{

  @Output()
    submited = new EventEmitter<Master>();

    data: Master;

  getData(data){
    console.log(data);
  }

  ngOnInit(){
    this.data = new Master(null,null);
  }

  kirimData(data){
    console.log(data);
    this.submited.emit(this.data);
    this.data = new Master(null,null);
  }




  

}
