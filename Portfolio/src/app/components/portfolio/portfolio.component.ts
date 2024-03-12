import { Component, OnInit } from '@angular/core';
import { DrawImgService } from 'src/app/services/draw-img.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  drawings: string[] = []

  constructor(private drawService: DrawImgService){}

  ngOnInit(): void{
    this.loadImages();
  }

  loadImages(): void{
    this.drawService.getAllImages().subscribe((data: any) =>{
      this.drawings = data.map((item: any) =>item.url);
    })
  }

  pevSlide(): void{
    
  }

  nextSlide(): void{

  }

}
