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
        <p>An lauen Sommerabenden sitzen Sie gemütlich auf der Terrasse unserer traumhaft gelegenen Ferienwohnung und genießen den Duft unserer englischen Rosen und die üppige Farbenpracht vieler Blühplanzen.</p>
        <div class="center"><img ngSrc="/assets/images/terrasse.jpg" width="400" height="300" alt="Terrasse" /></div>
        <p>Unsere absolut ruhige, sehr saubere und top gepflegte Ferienwohnung bietet alles, was man für erholsame Tage braucht.</p>
        <div class="center"><img ngSrc="/assets/images/bett.jpg" width="400" height="300" alt="Bett" /></div>
        <p>Im hellen und großzügigen Wohn-/Schlafraum ist viel Platz vorhanden, um auch bei schlechtem Wetter die Seele baumeln zu lassen.</p>
        <div class="center"><img ngSrc="/assets/images/couch.jpg" width="400" height="300" alt="Couch" /></div>
        <p class="center">Auf der gemütlichen Couch können Sie in Ruhe entspannen.</p>
        <div class="center"><img ngSrc="/assets/images/schrankwand.jpg" width="400" height="300" alt="Schrankwand" /></div>
        <p>Fernseher und Ministereoanlage sorgen dafür, dass keine Langeweile aufkommt! W-LAN gibt es selbstverständlich kostenlos!</p>
        <div class="center"><img ngSrc="/assets/images/essplatz.jpg" width="400" height="300" alt="Essplatz" /></div>
        <p>Auf der Terrasse oder am Essplatz genießen Sie die in der eigenen Küche zubereiteten Mahlzeiten.</p>
        <div class="center"><img ngSrc="/assets/images/kueche.jpg" width="400" height="300" alt="Küche" /></div>
        <p>Auch die Küche lässt keine Wünsche offen. Sie ist ausgestattet mit Herd/Backofen, Mikrowelle, Kühlschrank (mit Eisfach), Kaffeemaschine, Wasserkocher, Toaster. Geschirr, Besteck und Töpfe sind ebenfalls vorhanden.</p>
        <div class="center"><img ngSrc="/assets/images/bad.jpg" width="400" height="300" alt="Bad" /></div>
        <p>Nach einem abwechslungs- und erlebnisreichen Tag in Bamberg erholen Sie sich mit einer warmen Dusche im großzügig bemessenen Bad. Handtücher wie auch Bettwäsche werden Ihnen selbstverständlich zur Verfügung gestellt.</p>
        <div class="center"><img ngSrc="/assets/images/wohnung.jpg" width="370" height="523" alt="Grundriss der Wohnung" /></div>
        <h1 class="welcome-right">Herzlich willkommen in Bamberg!</h1>
        <p>Zum Ausdrucken können Sie sich <a href="/assets/Flyer_gessner_web.pdf" target="_blank" rel="noopener">hier</a> unseren Flyer downloaden.</p>
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
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      margin: 0.5rem 0;
    }
  `,
})
export class Home {}
