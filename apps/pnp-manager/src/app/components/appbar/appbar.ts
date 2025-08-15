import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  LangDefinition,
  TranslocoDirective,
  TranslocoService,
} from '@jsverse/transloco';
import { usePreset } from '@primeuix/themes';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { ProjectStore } from '../../features/project/project.store';
import { ThemeStore } from '../../themes';

@Component({
  selector: 'pnp-appbar',
  imports: [Button, CommonModule, Toolbar, TranslocoDirective],
  templateUrl: './appbar.html',
  styleUrl: './appbar.scss',
})
export class Appbar {
  projectsStore = inject(ProjectStore);
  themeStore = inject(ThemeStore);
  transloco = inject(TranslocoService);

  availableLangs = this.transloco.getAvailableLangs() as LangDefinition[];
}
