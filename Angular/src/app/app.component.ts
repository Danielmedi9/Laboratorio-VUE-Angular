import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { HeaderloginComponent } from './layouts/headerlogin/headerlogin.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeaderloginComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private auth: AuthService) {
    this.auth.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
}
