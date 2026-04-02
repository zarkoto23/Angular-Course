import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  imports: [],
  templateUrl: './demo-lifecycle.html',
  styleUrl: './demo-lifecycle.css',
})
export class DemoLifecycle implements OnInit,OnDestroy {

  constructor(){
    console.log('initializing (constructor)');
    
  }
  ngOnInit(): void {
console.log('onInit');
  }


  ngOnDestroy(): void {
console.log('onDestroy');
  }



}
