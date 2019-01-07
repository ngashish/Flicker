import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myImgData {
  photos : {photo: [{
    id: any,
    owner: any,
    secret:any,
    server: any,
    farm: any,
    title: any,
    ispublic: any,
    isfriend: any,
    isfamily: any,
    is_primary: any,
    has_comment: any
  }]}
}


@Injectable({
  providedIn: 'root'
})
export class GetimagesService {

  constructor(private http : HttpClient) { }

  getImages() : Observable<myImgData>{
    return this.http.get<myImgData>('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a14611c688ebd20dc5fe13b3073f146a&per_page=30&gallery_id=66911286-72157703406532791&format=json&nojsoncallback=1');    
  }
}
