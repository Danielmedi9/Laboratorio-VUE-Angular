import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; // <== faltaba esto
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headerlogin',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './headerlogin.component.html',
  styleUrl: './headerlogin.component.css',
})
export class HeaderloginComponent implements OnInit {
  username: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      if (status) {
        this.username = this.authService.getUsername();
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
