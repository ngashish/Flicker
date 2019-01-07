import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageInfoComponent } from './image-info/image-info.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [{
  path : '',redirectTo : '/home',pathMatch:'full'
},{
  path : 'home',component : AlbumComponent,
},{
  path : 'individual',component : ImageInfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
