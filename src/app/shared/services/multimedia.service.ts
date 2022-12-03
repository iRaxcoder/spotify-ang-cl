import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callBack: EventEmitter<any> = new EventEmitter<any>();

  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('hola');

  /*  myObservable1$: Subject<any> = new Subject(); 
  subject es lo mismo que observer y observable al mismo tiempo
 */
  constructor() {
    /*  
   example of how observer works in observable
   this.myObservable1$ = new Observable((observer: Observer<any>) => {
      observer.next('hola');
      observer.next('hola de nuevo');
      observer.error('jaja');
    }); */
  }
}
