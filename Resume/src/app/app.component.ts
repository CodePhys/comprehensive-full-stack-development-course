import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';

  // bool gestire lo stato del menu
  isNavbarOpen = true;

  // apertura/chiusura del menu
  toggleNavbar() {
  this.isNavbarOpen = !this.isNavbarOpen;
 }
  // serve se no apre in automatico menu a tendina (il menu è lo stesso sia nel toggle che per esteso, quindi se stato iniziale==true, il resizing provoca apertura automatica)
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Chiudi il menu se la larghezza della finestra è inferiore a soglia, cosi non si apre automaticamente
    this.isNavbarOpen = window.innerWidth > 700;
  }


}