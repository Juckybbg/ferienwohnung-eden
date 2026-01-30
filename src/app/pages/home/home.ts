import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="home-title">
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
    </section>
  `,
  styles: `
    :host {
      display: block;
      margin: 0 auto;
      max-width: 700px;
      padding: 1rem;
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
    }
    h1 {
      color: #1976d2;
    }
    a {
      color: #1976d2;
      text-decoration: underline;
    }
    img {
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      margin: 0.5rem 0;
    }
    .image-card {
      display: block;
      margin: 1.5rem auto;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      img[mat-card-image] {
        object-fit: contain; // Passt Bild in Rahmen ohne Verzerrung
        object-position: center; // Zentriert das Bild
        height: 300px; // Feste Höhe für Konsistenz
        width: 100%;
      }

      img {
        border-radius: 8px 8px 0 0;
      }

      mat-card-content {
        display: flex !important; // Flexbox erzwingen
        flex-direction: column; // Vertikale Ausrichtung
        justify-content: center; // Horizontal zentriert
        align-items: center; // Vertikal zentriert
        text-align: center; // Text zentriert
        min-height: 120px; // Mindesthöhe für Balance
        padding: 1.5rem;
        line-height: 1.4; // Zeilenhöhe optimieren
      }

      p {
        margin: 0;
        padding: 0 1rem;
      }
    }
  `,
})
export class Home {}
