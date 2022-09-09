import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  selectedItemImg?: string
  index: BehaviorSubject<number>  = new BehaviorSubject<number>(0)
  successfulBooking: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false)

  constructor() { }

  selectItem(item: any){
    this.selectedItemImg = item.imgUrl
    this.index.next(0)
  }

  getIndex(){
    return this.index
  }

  setSuccessfulBooking() {
    this.successfulBooking.next(true)
  }

  getSuccessfulBooking() {
    return this.successfulBooking
  }
}
