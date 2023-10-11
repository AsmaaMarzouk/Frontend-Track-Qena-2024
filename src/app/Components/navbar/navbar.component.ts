import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLog:boolean=true;
  constructor(private userAuthService:UserAuthenService){}
  ngOnInit(): void {
  //  this.isUserLog=this.userAuthService.isUserLoggedInOrNot;
  //  console.log(this.isUserLog);

  this.userAuthService.userStateChanged().subscribe({
    next:(userState)=>{
      this.isUserLog=userState;
      console.log(userState);

    },
    error:(error)=>{
      console.log(error);

    }
  })
  }

}
