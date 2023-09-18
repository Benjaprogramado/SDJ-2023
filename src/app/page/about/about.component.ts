import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ImagePath: string;

  constructor() { 
        //image location
        this.ImagePath = './yo.JPG'

  }

  ngOnInit(): void {
  }

}
