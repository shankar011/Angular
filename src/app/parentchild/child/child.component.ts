import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() items:string[]=[];

  @Output() itemClicked:EventEmitter<string> = new EventEmitter();

  onItemClick(item:string){
    this.itemClicked.emit(item)
  }

}
