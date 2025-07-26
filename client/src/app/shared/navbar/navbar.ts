import { Component,OnInit,ChangeDetectorRef   } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
//export class NavbarComponent {}
export class NavbarComponent implements OnInit {
  isAdmin = false;
  constructor(private cdr: ChangeDetectorRef) {}

 ngOnInit() {
  const isAdminFlag = localStorage.getItem('isAdmin');
  console.log('Admin flag:', isAdminFlag);  // Ajoute cette ligne
  this.isAdmin = isAdminFlag === 'true';
}

}