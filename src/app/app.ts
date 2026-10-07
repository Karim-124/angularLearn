import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Home/home';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angularLearn');
}
