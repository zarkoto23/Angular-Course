import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemesService } from '../../../core/services';
import { Theme } from '../../../models';
import { Observable, Subscription } from 'rxjs';
import { ThemeItem } from '../theme-item/theme-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-board',
  imports: [ThemeItem, CommonModule],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css',
})
export class ThemeBoard {
  themes: Theme[] = [];
  themes$: Observable<Theme[]>;

  constructor(private themeService: ThemesService) {
    this.themes$ = this.themeService.getThemes();
  }
}
