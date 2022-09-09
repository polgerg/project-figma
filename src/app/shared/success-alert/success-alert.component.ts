import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  acceptBooking(){
    this.galleryService.successfulBooking.next(false)
  }

}
