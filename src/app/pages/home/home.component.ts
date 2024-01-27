import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    const phrases = document.querySelectorAll<HTMLElement>('.fade');
    this.showPhrases(phrases, 0);
  }

  private showPhrases(phrases: NodeListOf<HTMLElement> | NodeList, index: number): void {
    if (index < phrases.length) {
      setTimeout(() => {
        (phrases[index] as HTMLElement).classList.add('show');
        this.showPhrases(phrases, index + 1);
      }, 250 * index); // Adjust the delay as needed
    } else {
      const containerCta = document.querySelector('.container-cta') as HTMLElement;
      if (containerCta) {
        containerCta.classList.add('show');
      }
    }
  }
}

@Directive({
  selector: '[appImageHover]'
})
export class ImageHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.animateOverlay(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.animateOverlay(false);
  }

  private animateOverlay(show: boolean): void {
    const overlay = this.el.nativeElement.querySelector('.img-overlay');
    if (overlay) {
      const opacity = show ? '1' : '0';
      this.renderer.setStyle(overlay, 'opacity', opacity);
    }
  }
}
