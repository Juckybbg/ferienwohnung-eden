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
  template: `
    <section aria-labelledby="home-title">
      <h1 id="home-title">Hier werden Sie sich wohlfühlen!</h1>
      <swiper-container #swiper [config]="swiperConfig" class="mySwiper">
        <swiper-slide *ngFor="let card of cards">
          <mat-card class="image-card">
            <img mat-card-image [ngSrc]="card.image" width="700" height="450" />
            <p mat-card-content>{{ card.text }}</p>
          </mat-card>
        </swiper-slide>
      </swiper-container>
      <h1 class="welcome-right">Herzlich willkommen in Bamberg!</h1>
        <p>
          Zum Ausdrucken können Sie sich
          <a href="/assets/Flyer_gessner_web.pdf" target="_blank" rel="noopener">hier</a> unseren
          Flyer downloaden.
        </p>
    </section>
  `,
  /*template: `
    <<section aria-labelledby="home-title">
      <mat-card>
        <h1 id="home-title">Hier werden Sie sich wohlfühlen!</h1>
        <!-- Terrasse Block -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/terrasse.jpg"
            width="400"
            height="300"
            alt="Terrasse"
          />
          <p mat-card-content>
            An lauen Sommerabenden sitzen Sie gemütlich auf der Terrasse unserer traumhaft gelegenen
            Ferienwohnung und genießen den Duft unserer englischen Rosen und die üppige Farbenpracht
            vieler Blühplanzen.
          </p>
        </mat-card>

        <!-- Wohnung Block -->
        <mat-card class="image-card">
          <img mat-card-image ngSrc="assets/images/bett.jpg" width="400" height="300" alt="Bett" />
          <p mat-card-content>
            Unsere absolut ruhige, sehr saubere und top gepflegte Ferienwohnung bietet alles, was
            man für erholsame Tage braucht.
          </p>
        </mat-card>

        <!-- Wohn-Schlafraum Block -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/couch.jpg"
            width="400"
            height="300"
            alt="Couch"
          />
          <p mat-card-content>
            Im hellen und großzgigen Wohn-Schlafraum ist viel Platz vorhanden, um auch bei
            schlechtem Wetter die Seele baumeln zu lassen.
          </p>
        </mat-card>

        <!-- Couch Block -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/schrankwand.jpg"
            width="400"
            height="300"
            alt="Schrankwand"
          />
          <p mat-card-content>
            Auf der gemütlichen Couch können Sie in Ruhe entspannen. Fernseher und Ministereoanlage
            sorgen dafür, dass keine Langeweile aufkommt! W-LAN gibt es selbstverständlich
            kostenlos!
          </p>
        </mat-card>

        <!-- Essplatz Block -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/essplatz.jpg"
            width="400"
            height="300"
            alt="Essplatz"
          />
          <p mat-card-content>
            Auf der Terrasse oder am Essplatz genießen Sie die in der eigenen Küche zubereiteten
            Mahlzeiten.
          </p>
        </mat-card>

        <!-- Küche Block (Snippet deutet darauf hin) -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/kueche.jpg"
            width="400"
            height="300"
            alt="Küche"
          />
          <p mat-card-content>
            Auch die Küche lässt keine Wünsche offen. Sie ist ausgestattet mit Herd/Backofen,
            Mikrowelle, Kühlschrank mit Eisfach, Kaffeemaschine, Wasserkocher, Toaster. Geschirr,
            Besteck und Töpfe sind ebenfalls vorhanden.
          </p>
        </mat-card>

        <!-- Bad Block -->
        <mat-card class="image-card">
          <img mat-card-image ngSrc="assets/images/bad.jpg" width="400" height="300" alt="Bad" />
          <p mat-card-content>
            Nach einem abwechslungs- und erlebnisreichen Tag in Bamberg erholen Sie sich mit einer
            warmen Dusche im großzügig bemessenen Bad. Handtücher wie auch Bettwäsche werden Ihnen
            selbstverständlich zur Verfügung gestellt.
          </p>
        </mat-card>

        <!-- Grundriss Block (angepasste Größe) -->
        <mat-card class="image-card">
          <img
            mat-card-image
            ngSrc="assets/images/wohnung.jpg"
            width="370"
            height="523"
            alt="Grundriss der Wohnung"
          />
          <p mat-card-content>&nbsp;</p>
          <!-- Leerer Text, da Bild-basiert -->
        </mat-card>
        <h1 class="welcome-right">Herzlich willkommen in Bamberg!</h1>
        <p>
          Zum Ausdrucken können Sie sich
          <a href="/assets/Flyer_gessner_web.pdf" target="_blank" rel="noopener">hier</a> unseren
          Flyer downloaden.
        </p>
      </mat-card>
    </section>>
  `,*/
  styles: `
    :host {
      display: block;
      margin: 0 auto;
      max-width: 1200px;
      padding: clamp(0.75rem, 2vw, 1rem);
    }

    swiper-container.mySwiper {
      display: block;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    swiper-slide {
      display: flex;
      justify-content: center;
    }

    .center {
      text-align: center;
      margin: 1.5rem 0;
    }
    .welcome-right {
      text-align: right;
      color: #1976d2;
      margin-top: 2rem;
    }
    mat-card {
      background: #fff;
      color: #222;
      margin-top: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 0;
      overflow: hidden;
    }
    h1 {
      color: #1976d2;
    }
    a {
      color: #1976d2;
      text-decoration: underline;
    }
    img {
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }
    .image-card {
      display: block;
      margin: 1.5rem auto;
      width: 100%;
      max-width: 700px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 0;
      overflow: hidden;
    }

    .image-card img[mat-card-image] {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      object-position: center;
      border-radius: 0;
      margin: 0;
      display: block;
    }

    .image-card p[mat-card-content] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 80px;
      padding: 1rem;
      line-height: 1.4;
      margin: 0;
      background: #cfccb7;
    }

    @media (max-width: 1024px) {
      :host {
        max-width: 960px;
      }

      swiper-container.mySwiper {
        max-width: 960px;
      }

      .image-card {
        max-width: 700px;
      }
    }

    @media (max-width: 600px) {
      .image-card {
        margin: 1rem auto;
      }

      .image-card p[mat-card-content] {
        min-height: 0;
        padding: 1rem;
      }
    }
  `,
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
