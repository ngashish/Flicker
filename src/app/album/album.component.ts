import { Component, OnInit } from '@angular/core';
import { GetimagesService } from '../getimages.service';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  images = [{}];
  title = 'Flicker';
  max = 5;

  constructor(private imgService: GetimagesService, private route: Router) {    
   }
  ngOnInit() {
    this.imgService.getImages()
      .subscribe(data => {
        data.photos.photo.forEach(picData => {
          var src = "";
          src += "https://farm" + picData.farm + ".staticflickr.com/" + picData.server + "/" + picData.id + "_" + picData.secret + ".jpg"
          this.images.push({
            image: picData,
            imageUrl: src,
            rating: 3,
            ratingBy: "",
            ratingReason: ""
          });
        });
        this.images.shift();
        var obj = JSON.parse(localStorage.getItem('itemToUpdate'));        
        console.log(this.images);
        if (localStorage.getItem('itemToUpdate')) {
          this.images.map((ele:any)=>{              
              if(obj.image.id == ele.image.id){
                this.images[this.images.indexOf(ele)] = obj;
              }
          });
          
        }
      });
  }
  navigateTo(image: any) {
    this.route.navigate(['/individual']);
    localStorage.setItem('imageSelected', JSON.stringify(image));
  }
}
