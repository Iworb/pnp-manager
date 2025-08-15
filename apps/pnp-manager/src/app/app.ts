import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Appbar } from './components/appbar/appbar';

@Component({
  imports: [RouterModule, Appbar],
  selector: 'pnp-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
