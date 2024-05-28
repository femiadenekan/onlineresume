import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkSectionVisibility();
  }

  ngAfterViewInit() {
    this.checkSectionVisibility();
    this.addSmoothScrolling();
  }

  checkSectionVisibility() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.pageYOffset + window.innerHeight;

    sections.forEach((section: any) => {
      if (scrollPosition > section.offsetTop + section.offsetHeight / 3) {
        section.classList.add('visible');
      }
    });
  }

  addSmoothScrolling() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
