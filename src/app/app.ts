import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../Components/home/home';
import { Footer } from '../Components/footer/footer';
import { Header } from '../Components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
  
}
