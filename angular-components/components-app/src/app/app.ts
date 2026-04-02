import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { DemoLifecycle } from './demo-lifecycle/demo-lifecycle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,DemoLifecycle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components-app');
}
