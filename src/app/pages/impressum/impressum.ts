import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="impressum-title">
      <mat-card>
        <h1 id="impressum-title">Impressum</h1>
        <p>
          Herbert Gessner<br />
          Bamberger Str. 19 a<br />
          96049 Bamberg
        </p>
        <p><strong>Tel:</strong> 0951-53771</p>
        <p>
          <strong>E-Mail:</strong>
          <a href="mailto:fewo-eden@kabelmail.de">fewo.eden@kabelmail.de</a>
        </p>
        <mat-divider></mat-divider>
        <h2>Webdesign & Programmierung:</h2>
        <p>
          Schützwohl EDV- und Internet-Dienstleistungen<br />
          Dipl-Kffr. Kerstin Schützwohl<br />
          <a href="http://www.schuetzwohl-edv.de" target="_blank" rel="noopener"
            >www.schuetzwohl-edv.de</a
          ><br />
          <a href="mailto:info@schuetzwohl-edv.de">info@schuetzwohl-edv.de</a>
        </p>
        <mat-divider></mat-divider>
        <h2>Disclaimer</h2>
        <p>
          312 O 85/98 - "Haftung für Links" hat das Landgericht (LG) Hamburg entschieden, dass man
          durch die Anbringung eines Links, die Inhalte der gelinkten Seite ggf. mit zu verantworten
          hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdrücklich von
          diesen Inhalten distanziert. Hiermit distanzieren wir uns ausdrücklich von allen Inhalten
          aller gelinkten Seiten auf unserer Homepage und machen uns diese Inhalte nicht zu eigen.
          Diese Erklärung gilt für alle auf dieser Website angebrachten Links. Die bereitgestellten
          Informationen auf dieser Website wurden sorgfältig geprüft und werden regelmäßig
          aktualisiert. Jedoch kann keine Garantie dafür übernommen, dass alle Angaben zu jeder Zeit
          vollständig, richtig und in letzter Aktualität dargestellt sind. Dies gilt insbesondere
          für alle Verbindungen ("Links") zu anderen Websites, auf die direkt oder indirekt
          verwiesen wird. Alle Angaben können ohne vorherige Ankündigung ergänzt, entfernt oder
          geändert werden. Außerdem liegt es nicht in unserer Verantwortung, Vorsichtsmaßnahmen zu
          ergreifen gegen destruktive Programme oder Programmteile wie Viren, Worms, Trojanische
          Pferde o.ä., die auf Webservern liegen, die möglicherweise durch Links von unserer Website
          aus erreicht werden.
        </p>
        <mat-divider></mat-divider>
        <h2>Datenschutz</h2>
        <p>
          Mit dem Absenden von Infoanfragen erklärt sich die Nutzerin/der Nutzer damit
          einverstanden, dass ihre/seine Angaben zur Bearbeitung im Sinne des
          Bundesdatenschutzgesetzes in unserer EDV erfasst werden. Alle Daten, die die Nutzerin/der
          Nutzer an uns übermittelt, werden selbstverständlich vertraulich behandelt.
        </p>
        <mat-divider></mat-divider>
        <h2>Weitere Links</h2>
        <ul>
          <li>
            <a href="http://www.ferienhausmarkt.com/region/bayern/" target="_blank" rel="noopener"
              >Ferienwohnung Bayern von privat</a
            >
          </li>
          <li>
            <a
              href="http://www.ostsee-strandurlaub.net/region/usedom/"
              target="_blank"
              rel="noopener"
              >Ferienhaus Usedom günstig finden</a
            >
          </li>
          <li>
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
              target="_blank"
              rel="noopener"
              >Europäische Streitbeilegungsplattform</a
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
      max-width: 700px;
      padding: 1rem;
    }
    mat-card {
      background: #fff;
      color: #222;
      margin-top: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
export class Impressum {}
