import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  @Input() galleryItem?: GalleryItem

  constructor() { }

  ngOnInit(): void {
  }

}
