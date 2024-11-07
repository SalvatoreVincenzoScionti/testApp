import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from './headerBar/headerbar.component';
import { FooterbarComponent } from './footerBar/footerbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderbarComponent, FooterbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
