import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Pictures';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvSb60CDLfzbD6txFi5zbcOAnLP6BcCpfWgdp6td9coOA7Jz8tmXdolRdYGvfkzWViYA&usqp=CAU';
  image2 = 'https://i.pinimg.com/736x/73/ae/99/73ae99970b6a634631f94fd18dd68aa7.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAkH7sOraKWtckg8gXzx-3YdAf_4BV0aAli3RQwKcpcX-kTVWfAJ_mBiWs1kqKspPHZY&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}