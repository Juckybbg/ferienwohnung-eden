import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="kontakt-title">
      <mat-card>
        <h1 id="kontakt-title">So können Sie zu uns Kontakt aufnehmen:</h1>
        <p>
          <strong>Tel:</strong> 0951-53771<br />
          <strong>Mobil:</strong> 0170-6445530
        </p>
        <p>Per Mail: <a href="mailto:fewo.eden@kabelmail.de">fewo.eden(at)kabelmail.de</a></p>
        <mat-divider></mat-divider>
        <h2>Für Buchungsanfragen benötigen wir folgende Informationen:</h2>
        <h3>Persönliche Daten:</h3>
        <ul>
          <li>Name, Adresse</li>
          <li>Telefon</li>
          <li>E-Mail</li>
        </ul>
        <h3>Reisedaten</h3>
        <ul>
          <li>Anzahl der Personen</li>
          <li>Anzahl der Übernachtungen</li>
          <li>Anreisedatum, Abreisedatum</li>
        </ul>
        <mat-divider></mat-divider>
        <h2>Wir sind gelistet bei:</h2>
        <ul>
          <li>
            <a href="http://www.fewo-in-bamberg.de/" target="_blank" rel="noopener"
              >www.fewo-in-bamberg.de</a
            >
          </li>
          <li>
            <a href="http://www.ferienhausmarkt.com/region/bayern/" target="_blank" rel="noopener"
              >Ferienwohnung Bayern von privat</a
            >
          </li>
          <li>
            <a href="http://www.ferienhausmiete.de/53113.htm" target="_blank" rel="noopener"
              >Garten Eden</a
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
    h2,
    h3 {
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
export class Kontakt {}
