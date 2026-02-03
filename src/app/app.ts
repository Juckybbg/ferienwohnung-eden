import { Component, signal, ViewChild, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ferienwohnung-eden');
  protected readonly isMobile = signal(false);

  @ViewChild('drawer') drawer!: MatDrawer;

  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  constructor() {
    this.breakpointObserver.observe(['(max-width: 500px)']).subscribe((result) => {
      this.isMobile.set(result.matches);
      if (!result.matches && this.drawer) {
        this.drawer.open();
      }
    });

    // Drawer automatisch nach Navigation auf mobilen Geräten schließen
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile() && this.drawer) {
        this.drawer.close();
      }
    });
  }

  toggleMenu() {
    this.drawer.toggle();
  }
}
