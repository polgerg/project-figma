import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item.model';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  @Input() galleryItem?: GalleryItem
 

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  selectItem(imgUrl: string) {
    this.galleryService.selectItem(imgUrl)
  }

  onBook() {
    this.galleryService.setSuccessfulBooking()
  }

}
