import { Component, computed, signal } from '@angular/core';

const QUOTES: { text: string; source: string }[] = [
  {
    text: "Don't Panic.",
    source: 'The Hitchhiker\'s Guide to the Galaxy',
  },
  {
    text: 'Time is an illusion. Lunchtime doubly so.',
    source: 'Ford Prefect',
  },
  {
    text: 'So long, and thanks for all the fish.',
    source: 'The Dolphins',
  },
  {
    text: 'I love deadlines. I love the whooshing noise they make as they go by.',
    source: 'Douglas Adams',
  },
  {
    text: 'For a moment, nothing happened. Then, after a second or so, nothing continued to happen.',
    source: 'The Hitchhiker\'s Guide to the Galaxy',
  },
  {
    text: 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.',
    source: 'Douglas Adams',
  },
  {
    text: 'The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-two.',
    source: 'Deep Thought',
  },
  {
    text: 'I\'d far rather be happy than right any day.',
    source: 'Slartibartfast',
  },
  {
    text: 'In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.',
    source: 'The Restaurant at the End of the Universe',
  },
  {
    text: 'Would it save you a lot of time if I just gave up and went mad now?',
    source: 'Arthur Dent',
  },
  {
    text: 'Life... is like a grapefruit. Well, it\'s sort of orangey-yellow and dimpled on the outside, wet and squidgy in the middle. It\'s got pips inside, too. Oh, and some people have half a one for breakfast.',
    source: 'Ford Prefect',
  },
  {
    text: 'The ships hung in the sky in much the same way that bricks don\'t.',
    source: 'The Hitchhiker\'s Guide to the Galaxy',
  },
  {
    text: 'Anyone who is capable of getting themselves made President should on no account be allowed to do the job.',
    source: 'Douglas Adams',
  },
  {
    text: 'I think you ought to know I\'m feeling very depressed.',
    source: 'Marvin the Paranoid Android',
  },
  {
    text: 'Here I am, brain the size of a planet, and they tell me to take you up to the bridge. Call that job satisfaction? \'Cause I don\'t.',
    source: 'Marvin the Paranoid Android',
  },
];

@Component({
  selector: 'app-quote-card',
  imports: [],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.css',
})
export class QuoteCard {
  protected readonly quoteIndex = signal<number | null>(null);

  protected readonly currentQuote = computed(() => {
    const idx = this.quoteIndex();
    return idx !== null ? QUOTES[idx] : null;
  });

  showRandomQuote(): void {
    let next: number;
    do {
      next = Math.floor(Math.random() * QUOTES.length);
    } while (next === this.quoteIndex() && QUOTES.length > 1);
    this.quoteIndex.set(next);
  }
}
