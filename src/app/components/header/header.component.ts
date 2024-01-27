import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
[x: string]: any;

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
}}
