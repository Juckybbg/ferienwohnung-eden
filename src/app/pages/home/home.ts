import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../cards-service';
import { Card } from '../../models/card';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, NgOptimizedImage, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnInit {
  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef<HTMLElement>;

  cards: Card[] = [];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    /*breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2.5 },
    },*/
    grabCursor: true, // Für besseres Swipe-Feeling
  };

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.getCards().subscribe(data => {
      this.cards = data;
    });
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperRef?.nativeElement as any;

    if (!swiperEl) {
      return;
    }

    // Swiper web component can throw in unit-test/JSDOM environments.
    // In the browser it initializes normally.
    if (typeof window === 'undefined' || typeof customElements === 'undefined') {
      return;
    }

    try {
      Object.assign(swiperEl, this.swiperConfig);
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }
    } catch {
      // no-op
    }
  }
}
