import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslocoPipe} from '@jsverse/transloco';
import {marker} from '@jsverse/transloco-keys-manager';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = marker('transloco-angular18');
}
