import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-interessantes-bamberg',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './interessantes-bamberg.html',
  styleUrl: './interessantes-bamberg.scss',
})
export class InteressantesBamberg {}
