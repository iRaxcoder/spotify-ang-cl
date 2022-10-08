import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';


@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
