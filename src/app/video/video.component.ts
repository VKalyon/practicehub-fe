import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  constructor(private videoService: VideoService) {}

  printVideos() {
    this.videoService.getAllVideos().subscribe(data => console.log(data))
  }
}
