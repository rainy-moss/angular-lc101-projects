import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Project';
  name: string = 'Rainy Moss';
  itemList: string[] = ['seashell', 'beach glass', 'seaweed', 'crab'];
  
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
 }
}
