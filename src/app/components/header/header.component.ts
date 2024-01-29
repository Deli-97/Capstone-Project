import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{
[x: string]: any;

constructor(private el: ElementRef, private renderer: Renderer2) {}

closeNavbar() {
  const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
  if (navbarToggler) {
    this.renderer.removeClass(document.body, 'overflow-hidden'); // Opzionale: riabilita l'overflow del body
    navbarToggler.click(); // Simula il click sul pulsante del menu
  }
}

ngAfterViewInit() {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      const top = window.scrollY;

      if (top >= 100) {
        navbar.classList.add('footer');
      } else {
        navbar.classList.remove('footer');
      }
    });
  }
}

}
