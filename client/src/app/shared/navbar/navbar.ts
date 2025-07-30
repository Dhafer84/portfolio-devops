import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Ajout important

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // <-- ajoute ça ici
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  menuOpen = false;
  isAdmin = localStorage.getItem('isAdmin') === 'true';

 toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenuIfMobile() {
  if (window.innerWidth <= 768) {
    this.menuOpen = false;
  }
}

}
