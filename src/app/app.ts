import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QuoteCard } from './quote-card/quote-card';

@Component({
  selector: 'app-root',
  imports: [QuoteCard],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {}
