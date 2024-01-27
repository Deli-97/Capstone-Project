import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'progettoAngular';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Riporta la finestra all'inizio della pagina
      }
    });
  }


  ngAfterViewInit() {
    const starElement = document.getElementById('floating-star') as HTMLElement;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY / 5;
      const rotationValue = `rotate(${scrollY}deg)`;

      if (starElement) {
        starElement.style.transform = rotationValue;
      }
    });
  }
}
