import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callBack: EventEmitter<any> = new EventEmitter<any>();

  /* myObservable1$: BehaviorSubject<any> = new BehaviorSubject('hola'); */
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement; //<audio>

  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
    '-00:00'
  );
  public songStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public songPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  /*  myObservable1$: Subject<any> = new Subject(); 
  subject es lo mismo que observer y observable al mismo tiempo
 */
  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((responseOk) => {
      if (responseOk) {
        this.setAudio(responseOk);
      }
    });
    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (status: any) => {
    switch (status.type) {
      case 'play':
        this.songStatus$.next('paused');
        break;
      case 'playing':
        this.songStatus$.next('playing');
        break;
      case 'ended':
        this.songStatus$.next('paused');
        break;
      default:
        this.songStatus$.next('paused');
    }
  };

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  };

  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime * 100) / duration;
    this.songPercentage$.next(percentage);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeRemaining$.next(displayFormat);
  }

  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public toggleSongStatus(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percetage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percetage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
