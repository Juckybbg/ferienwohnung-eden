import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.scss',
})
export class Kontakt {}
