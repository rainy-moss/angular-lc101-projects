import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];

   targetImage = 'https://www.foodbusinessnews.net/ext/resources/2022/06/27/IceCreamSurvey_Lead.jpg?height=667&t=1656349101&width=1080';

   constructor() { }

   ngOnInit() {
   }

}
