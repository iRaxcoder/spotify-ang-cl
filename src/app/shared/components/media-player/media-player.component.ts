import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //reactive programming;

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  observerList$: Array<Subscription> = [];

  songStatus: string = 'paused';

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$ = this.multimediaService.songStatus$.subscribe(
      (status) => (this.songStatus = status)
    );
    /*   const observer1$: Subscription = this.multimediaService.callBack.subscribe(
      (response: TrackModel) => {}
    ); */
    /* const observable$ = this.multimediaService.myObservable1$.subscribe({
      next: () => {},
      error: () => {},
    }); */
    this.observerList$ = [observer1$];
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;

    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }

  ngOnDestroy(): void {
    this.observerList$.forEach((u) => u.unsubscribe());
  }
}
