import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiURL = "https://staging-practicehub-u9p2.encr.app/video"
  //apiURL = "http://localhost:4000/video"

  constructor(private http: HttpClient) { }

  getVideo(title: string) {
    return this.http.get(`${this.apiURL}/${title}`)
  }

  getAllVideos() {
    return this.http.get(`${this.apiURL}`)
  }

  postVideo(data: any) {
    console.log(data)
    return this.http.post(this.apiURL, data);
 }
}
