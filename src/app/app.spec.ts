import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the title heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain("The Hitchhiker's Guide");
  });

  it('renders the subtitle', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('to the Galaxy');
  });

  it('contains the quote card', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const quoteCard = fixture.nativeElement.querySelector('app-quote-card');
    expect(quoteCard).toBeTruthy();
  });
});
