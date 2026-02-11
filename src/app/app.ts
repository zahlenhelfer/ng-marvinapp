import { Component } from '@angular/core';
import { QuoteCard } from './quote-card/quote-card';

@Component({
  selector: 'app-root',
  imports: [QuoteCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
