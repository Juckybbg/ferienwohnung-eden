import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-interessantes-bamberg',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="interessantes-title">
      <mat-card>
        <h1 id="interessantes-title">Freizeitangebote</h1>
        <h2>Stadtgebiet</h2>
        <ul>
          <li>
            <a href="http://www.bamberg-stadtfuehrungen.de/" target="_blank" rel="noopener"
              >Stadtführungen</a
            >
          </li>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Altenburg_(Bamberg)"
              target="_blank"
              rel="noopener"
              >Altenburg</a
            >
          </li>
          <li>
            Sandstraße mit
            <a href="http://www.sandkerwa.de/" target="_blank" rel="noopener">Sandkerwa</a>
          </li>
          <li>
            <a href="http://theater.bamberg.de/" target="_blank" rel="noopener"
              >ETA-Hoffmann-Theater</a
            >
          </li>
          <li>
            <a href="http://www.konzerthalle-bamberg.de/" target="_blank" rel="noopener"
              >Konzert- und Kongresshalle</a
            >
          </li>
          <li>
            <a href="http://www.bamberger-symphoniker.de/" target="_blank" rel="noopener"
              >Bamberger Symphoniker</a
            >
          </li>
          <li>
            Events in der
            <a href="http://www.brose-arena.com/" target="_blank" rel="noopener">Brose-Arena</a>
          </li>
          <li>
            <a href="http://www.bamberger-dom.de" target="_blank" rel="noopener">Kaiserdom</a>,
            <a
              href="http://de.wikipedia.org/wiki/Kloster_Michelsberg"
              target="_blank"
              rel="noopener"
              >Kloster Michelsberg</a
            >
          </li>
          <li>
            <a
              href="http://www.schloesser.bayern.de/deutsch/garten/objekte/bamberg.htm"
              target="_blank"
              rel="noopener"
              >Rosengarten</a
            >,
            <a
              href="http://www.schloesser.bayern.de/deutsch/schloss/objekte/bam_res.htm"
              target="_blank"
              rel="noopener"
              >Neue Residenz</a
            >
          </li>
          <li>
            <a
              href="http://www.schloesser.bayern.de/deutsch/schloss/objekte/bam_hof.htm"
              target="_blank"
              rel="noopener"
              >Alte Hofhaltung</a
            >
          </li>
          <li>
            <a href="https://museum.bamberg.de" target="_blank" rel="noopener">Museen</a> und
            Galerien
          </li>
        </ul>
        <mat-divider></mat-divider>
        <h2>Nähere Umgebung</h2>
        <ul>
          <li>
            <a
              href="http://de.wikipedia.org/wiki/Stadtpark_Hain_(Bamberg)"
              target="_blank"
              rel="noopener"
              >Stadtpark Hain</a
            >
          </li>
          <li>
            <a href="https://www.erlebe-bruder-wald.de/index.html" target="_blank" rel="noopener"
              >Bruderwald</a
            >
          </li>
          <li>
            <a href="https://www.komoot.de/smarttour/3286814" target="_blank" rel="noopener"
              >Regnitzauen</a
            >
          </li>
          <li>
            <a
              href="https://www.bamberg.info/poi/faehre_pettstadt-8291/"
              target="_blank"
              rel="noopener"
              >Fähre Pettstadt</a
            >
          </li>
          <li><a href="http://www.bierkeller.de/" target="_blank" rel="noopener">Bierkeller</a></li>
          <li>
            <a
              href="http://www.fraenkische-schweiz.com/sport/rad.html"
              target="_blank"
              rel="noopener"
              >Radwege</a
            >
          </li>
        </ul>
        <mat-divider></mat-divider>
        <h2>Weiterer Umkreis</h2>
        <ul>
          <li>
            <a href="http://www.schoenborn.de/weissenstein.html" target="_blank" rel="noopener"
              >Schloss Pommersfelden</a
            >
          </li>
          <li>
            <a href="http://www.vierzehnheiligen.de/" target="_blank" rel="noopener"
              >Vierzehnheiligen</a
            >
          </li>
          <li>
            <a
              href="https://www.hss.de/bildungszentren/kloster-banz/"
              target="_blank"
              rel="noopener"
              >Kloster Banz</a
            >
          </li>
          <li>
            <a href="https://www.frankenjura.com/klettern" target="_blank" rel="noopener"
              >Kletter- und Wanderparadies</a
            >
          </li>
          <li>
            <a href="http://www.fraenkische-schweiz.com/" target="_blank" rel="noopener"
              >Fränkische Schweiz</a
            >
          </li>
          <li>
            <a href="http://www.obermaintherme.de/" target="_blank" rel="noopener"
              >Thermalbad Staffelstein</a
            >
          </li>
        </ul>
      </mat-card>
    </section>
  `,
  styles: `
    :host {
      display: block;
      margin: 0 auto;
      max-width: 900px;
      padding: 1rem;
    }
    mat-card {
      background: #cfccb7;
      color: #222;
      margin-top: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      padding: 30px;
    }
    h1,
    h2 {
      color: #1976d2;
    }
    a {
      color: #1976d2;
      text-decoration: underline;
    }
    ul {
      margin-bottom: 1rem;
    }
  `,
})
export class InteressantesBamberg {}
