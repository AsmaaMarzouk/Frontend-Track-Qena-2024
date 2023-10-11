import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenService {
  isUserLogBehavior: BehaviorSubject<boolean>;
  constructor() {
    this.isUserLogBehavior = new BehaviorSubject<boolean>(
      this.isUserLoggedInOrNot
    );
  }
  userLogin(email: string, password: string) {
    let token="9992233";
    localStorage.setItem("accessToken",token);
    this.isUserLogBehavior.next(true);
  }
  userLogout(){
    localStorage.removeItem("accessToken");
    this.isUserLogBehavior.next(false);
  }
  get isUserLoggedInOrNot(): boolean {
    return localStorage.getItem('accessToken') ? true : false;
  }
  userStateChanged():Observable<boolean>{
    return this.isUserLogBehavior.asObservable();

  }
}
