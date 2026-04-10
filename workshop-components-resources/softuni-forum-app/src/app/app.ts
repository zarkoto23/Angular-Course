import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { Footer } from './shared/components/footer/footer';
import { PostBoard } from './features/posts';
import { ThemeBoard } from './features/themes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, PostBoard, ThemeBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('softuni-forum-app');
}
