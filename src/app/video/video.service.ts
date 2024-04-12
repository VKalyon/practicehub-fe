import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiURL = "http://localhost:4000/video"

  constructor(private http: HttpClient) { }

  getVideo(title: string) {
    return this.http.get(`${this.apiURL}/${title}`)
  }

  getAllVideos() {
    return this.http.get(`${this.apiURL}`)
  }
}
