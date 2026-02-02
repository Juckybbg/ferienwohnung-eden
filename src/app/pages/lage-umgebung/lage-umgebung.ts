import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-lage-umgebung',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lage-umgebung.html',
  styleUrl: './lage-umgebung.scss',
})
export class LageUmgebung {}
