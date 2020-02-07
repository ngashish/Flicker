import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.css']
})
export class ImageInfoComponent implements OnInit {

  constructor(private route : Router) { }
  selectedImage : any;
  max = 5;
  imageRating : FormGroup;
  ngOnInit() {
    console.log("hieveryone");
    
    var data = JSON.parse(localStorage.getItem('imageSelected'));
    this.selectedImage = data;
    this.imageRating = new FormGroup({
      image : new FormControl(this.selectedImage.image),
      imageUrl : new FormControl(this.selectedImage.imageUrl),
      rating : new FormControl(this.selectedImage.rating),
      ratingBy : new FormControl(this.selectedImage.ratingBy),
      ratingReason : new FormControl(this.selectedImage.ratingReason)
    });
  }
  submit(){
      localStorage.setItem('itemToUpdate',JSON.stringify(this.imageRating.value));
      this.route.navigate(['/home']);
  }
  navigateTo(){
    this.route.navigate(['/home']);
  }


}
