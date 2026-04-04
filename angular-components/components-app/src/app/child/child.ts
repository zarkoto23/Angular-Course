import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {




  @Input() childMessage!:string

  @Output() childClickedEvent=new EventEmitter<string>()

  sendMsgToParrent(){
    this.childClickedEvent.emit('HAHAhahaHAQHAH')
  }


}
 