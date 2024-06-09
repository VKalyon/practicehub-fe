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

  fileSelected(event: any) {
    const file = event.target.files[0];
    const title = (document.getElementById('videoTitle') as HTMLInputElement).value;

    if (file) {
      const formData = new FormData();
      formData.append("file", file)
      formData.append("title", title)
      const upload$ = this.videoService.postVideo(formData)
      
      upload$.subscribe(res => console.log(res))
    }
  }
}
