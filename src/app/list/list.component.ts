import { Component, OnInit, Input } from '@angular/core';
import { Master } from '../master/master.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input('val')
  value : Master;

  @Input('index')
  index : string;


}
