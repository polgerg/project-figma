import { Component, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryItems: GalleryItem[] = []

  selectedImg: string;
  index: number = 0
  
  constructor() {
    this.galleryItems = [
      {imgUrl: 'https://i.picsum.photos/id/238/343/221.jpg?hmac=pouwu_h9LLni9-KpnscxFgkiSdMWGASTJiV7QKTUI2s', title: 'Vien, Austria', date: '12.10-22.10.2022'},
      {imgUrl: 'https://i.picsum.photos/id/879/343/221.jpg?hmac=VrRGjKgYFk0k_yiWhm-6FFWMIqTf_Sf5x99G5PekYX0', title: 'Salzburg, Austria', date: '12.10-22.10.2022'},
      {imgUrl: 'https://i.picsum.photos/id/484/343/221.jpg?hmac=qSMf0e4wJB5z_8-lgIKfts4y5B7uPet1I6e8vFfHzvU', title: 'Villach, Austria', date: '12.10-22.10.2022'},
      {imgUrl: 'https://i.picsum.photos/id/860/343/221.jpg?hmac=Z_LZvHoPjK8SLw-Ch5eW6P-MsnF8PWmJ6t4CLVEZXJk', title: 'Graz, Austria', date: '12.10-22.10.2022'},
      {imgUrl: 'https://i.picsum.photos/id/484/343/221.jpg?hmac=qSMf0e4wJB5z_8-lgIKfts4y5B7uPet1I6e8vFfHzvU', title: 'Villach, Austria', date: '12.10-22.10.2022'},
      {imgUrl: 'https://i.picsum.photos/id/860/343/221.jpg?hmac=Z_LZvHoPjK8SLw-Ch5eW6P-MsnF8PWmJ6t4CLVEZXJk', title: 'Graz, Austria', date: '12.10-22.10.2022'},
    ]
    this.selectedImg = this.galleryItems[0].imgUrl
   }

  ngOnInit(): void {
  }

  selectImg(index: number): void{
    this.selectedImg = this.galleryItems[index].imgUrl;
    this.index = index
  }
}
