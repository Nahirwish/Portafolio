import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScrollEffect();
  }

  initScrollEffect() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        scrollToNextSection();
      } else {
        scrollToPrevSection();
      }

      lastScrollTop = currentScroll;
    });

    function scrollToNextSection() {
      const currentSection = getCurrentSection();
      if (currentSection) {
          const nextSection = currentSection.nextElementSibling;
  
          if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
          }
      }
  }

  function scrollToPrevSection() {
    const currentSection = getCurrentSection();
    if (currentSection) {
        const prevSection = currentSection.previousElementSibling;

        if (prevSection) {
            prevSection.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }
}

    function getCurrentSection(): Element | null {
      const sections = document.querySelectorAll(".full-screen");
      let currentSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      return currentSection || null;
    }
  }
}


