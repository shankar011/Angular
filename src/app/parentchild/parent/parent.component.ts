import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {


  item:string[] = ['Item 1','Item 2', 'Item 3', 'Item 4' ]

  handleClick(item:string){
    alert(`parent received: ${item}`)
  }


}
