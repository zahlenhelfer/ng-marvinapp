import { TestBed } from '@angular/core/testing';
import { QuoteCard } from './quote-card';

describe('QuoteCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCard],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows no quote card on initial render', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.rounded-2xl');
    expect(card).toBeNull();
  });

  it('shows a quote card after showRandomQuote()', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.detectChanges();

    fixture.componentInstance.showRandomQuote();
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('.rounded-2xl');
    expect(card).toBeTruthy();
  });

  it('renders quote text inside the italic paragraph', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.componentInstance.showRandomQuote();
    fixture.detectChanges();

    const quoteEl: HTMLElement = fixture.nativeElement.querySelector('p.italic');
    expect(quoteEl.textContent?.trim().length).toBeGreaterThan(0);
  });

  it('renders the source attribution', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.componentInstance.showRandomQuote();
    fixture.detectChanges();

    const sourceEl: HTMLElement = fixture.nativeElement.querySelector('p.text-sm');
    expect(sourceEl.textContent).toContain('—');
  });

  it('renders the button with expected label', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain("Don't Panic");
  });

  it('clicking the button reveals the quote card', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('.rounded-2xl');
    expect(card).toBeTruthy();
  });

  it('currentQuote is null before the first call', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component = fixture.componentInstance as any;
    expect(component.currentQuote()).toBeNull();
  });

  it('currentQuote returns an object with text and source after showRandomQuote()', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.componentInstance.showRandomQuote();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component = fixture.componentInstance as any;
    const quote = component.currentQuote();
    expect(quote).not.toBeNull();
    expect(typeof quote.text).toBe('string');
    expect(typeof quote.source).toBe('string');
  });

  it('showRandomQuote() produces a different quote over repeated calls', () => {
    const fixture = TestBed.createComponent(QuoteCard);
    fixture.componentInstance.showRandomQuote();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component = fixture.componentInstance as any;
    const first = component.currentQuote();

    let changed = false;
    for (let i = 0; i < 30; i++) {
      fixture.componentInstance.showRandomQuote();
      if (component.currentQuote() !== first) {
        changed = true;
        break;
      }
    }
    expect(changed).toBe(true);
  });
});
