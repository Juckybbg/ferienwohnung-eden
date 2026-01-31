import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-preis-buchung',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="preise-title">
      <mat-card>
        <h1 id="preise-title">Preise und Buchungsinformationen</h1>
        <p>Appartement inkl. Endreinigung, Bettwäsche und Handtücher</p>
        <mat-divider></mat-divider>
        <h2>Eine Person:</h2>
        <ul>
          <li>pro Übernachtung ab 5 Nächten: <strong>67,00 €</strong>/Nacht</li>
          <li>
            Wochenpauschale (ab 7 Übernachtungen): <strong>64,00 €</strong>/Nacht =
            <strong>448,00 €</strong>
          </li>
        </ul>
        <h2>Zwei Personen:</h2>
        <ul>
          <li>pro Übernachtung ab 5 Nächten: <strong>70,00 €</strong>/Nacht</li>
          <li>
            Wochenpauschale (ab 7 Übernachtungen): <strong>67,00 €</strong>/Nacht =
            <strong>469,00 €</strong>
          </li>
        </ul>
        <p class="center">
          <strong
            >Preis für weniger Übernachtungen bzw. für längere Aufenthalte ist auf Anfrage jederzeit
            möglich.</strong
          >
        </p>
        <mat-divider></mat-divider>
        <h2>Check-in / Check-out</h2>
        <ul>
          <li>Check in: <strong>15:00 Uhr</strong></li>
          <li>Check out: <strong>10:00 Uhr</strong></li>
        </ul>
        <p>
          Nichtraucherappartement<br />
          Allergiebetten, keine Haustiere<br />
          Waschmaschinen- und Trocknernutzung ist nach Absprache möglich.
        </p>
        <mat-divider></mat-divider>
        <h2>Stornobedingungen</h2>
        <ul>
          <li>Kostenfrei bis 31 Tage vor Termin</li>
          <li>25 % bis 15 Tage vor Termin</li>
          <li>50 % ab 14 Tage vor Termin</li>
        </ul>
        <p>
          Es gelten unsere
          <a href="/assets/AGB.pdf" target="_blank" rel="noopener"
            >Allgemeinen Geschäftsbedingungen</a
          >
        </p>
        <mat-divider></mat-divider>
        <h2>Zahlungsart</h2>
        <p>Barzahlung bei Ankunft</p>
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
    .center {
      text-align: center;
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
      color: #6b8e23;
    }
    ul {
      margin-bottom: 1rem;
    }
    a {
      color: #6b8e23;
      text-decoration: underline;
    }
  `,
})
export class PreisBuchung {}
