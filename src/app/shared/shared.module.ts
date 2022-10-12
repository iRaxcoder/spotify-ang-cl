import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    UserHeaderComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent
  ]
})
export class SharedModule { }
