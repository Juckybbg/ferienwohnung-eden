import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Ferienwohnung Eden – Home',
  },
  {
    path: 'lage-umgebung',
    loadComponent: () => import('./pages/lage-umgebung/lage-umgebung').then((m) => m.LageUmgebung),
    title: 'Lage und Umgebung',
  },
  {
    path: 'preis-buchung',
    loadComponent: () => import('./pages/preis-buchung/preis-buchung').then((m) => m.PreisBuchung),
    title: 'Preis und Buchungsinfos',
  },
  {
    path: 'interessantes-bamberg',
    loadComponent: () =>
      import('./pages/interessantes-bamberg/interessantes-bamberg').then(
        (m) => m.InteressantesBamberg,
      ),
    title: 'Interessantes in Bamberg',
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/kontakt/kontakt').then((m) => m.Kontakt),
    title: 'Kontakt',
  },
  {
    path: 'impressum',
    loadComponent: () => import('./pages/impressum/impressum').then((m) => m.Impressum),
    title: 'Impressum / Disclaimer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
