import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  selectedItemImg?: string

  constructor() { }

  selectItem(item: any){
    this.selectedItemImg = item.imgUrl
  }
}
