import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemesService } from '../../../core/services';
import { Theme } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-board',
  imports: [],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css',
})
export class ThemeBoard implements OnInit, OnDestroy{

  susbsctiptions:Subscription[]=[]

  themes:Theme[]=[]

  constructor(private themeService:ThemesService){


  }

  ngOnInit(): void {

  this.susbsctiptions.push(this.themeService.getThemes().subscribe((themes)=>{
    this.themes=themes
  }))
    
  }

  ngOnDestroy(): void {
    this.susbsctiptions.forEach(sub=>{
      sub.unsubscribe()
    })
  }
  
}
