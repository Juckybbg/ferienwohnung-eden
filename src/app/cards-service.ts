import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {

  private mockCards: Card[] = [
      new Card(
        'assets/images/terrasse.jpg',
        'An lauen Sommerabenden sitzen Sie gemütlich auf der Terrasse unserer traumhaft gelegenen Ferienwohnung und genießen den Duft unserer englischen Rosen und die üppige Farbenpracht vieler Blühpflanzen.',
      ),
      new Card(
        'assets/images/bett.jpg',
        'Unsere absolut ruhige, sehr saubere und top gepflegte Ferienwohnung bietet alles, was man für erholsame Tage braucht.',
      ),
      new Card(
        'assets/images/couch.jpg',
        'Im hellen und großzügigen Wohn-Schlafraum ist viel Platz vorhanden, um auch bei schlechtem Wetter die Seele baumeln zu lassen.',
      ),
      new Card(
        'assets/images/schrankwand.jpg',
        'Auf der gemütlichen Couch können Sie in Ruhe entspannen. Fernseher und Ministereoanlage sorgen dafür, dass keine Langeweile aufkommt! W-LAN gibt es selbstverständlich kostenlos!',
      ),
      new Card(
        'assets/images/essplatz.jpg',
        'Auf der Terrasse oder am Essplatz genießen Sie die in der eigenen Küche zubereiteten Mahlzeiten.',
      ),
      new Card(
        'assets/images/kueche.jpg',
        'Auch die Küche lässt keine Wünsche offen. Sie ist ausgestattet mit Herd/Backofen, Mikrowelle, Kühlschrank mit Eisfach, Kaffeemaschine, Wasserkocher, Toaster. Geschirr, Besteck und Töpfe sind ebenfalls vorhanden.',
      ),
      new Card(
        'assets/images/bad.jpg',
        'Nach einem abwechslungs- und erlebnisreichen Tag in Bamberg erholen Sie sich mit einer warmen Dusche im großzügig bemessenen Bad. Handtücher wie auch Bettwäsche werden Ihnen selbstverständlich zur Verfügung gestellt.',
      ),
      new Card('assets/images/wohnung.jpg', 'Grundriss der Wohnung'), // Text optional leer
    ];

  
  getCards(): Observable<Card[]> {
    return of(this.mockCards);
  }
  
}
