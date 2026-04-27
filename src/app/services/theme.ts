import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'sakura' | 'forest';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('sakura');
  public theme$: Observable<Theme> = this.currentTheme.asObservable();

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: Theme): void {
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  getTheme(): Theme {
    return this.currentTheme.value;
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const theme = savedTheme || 'sakura';
    this.setTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    if (theme === 'sakura') {
      root.setAttribute('data-theme', 'sakura');
    } else if (theme === 'forest') {
      root.setAttribute('data-theme', 'forest');
    }
  }
}
