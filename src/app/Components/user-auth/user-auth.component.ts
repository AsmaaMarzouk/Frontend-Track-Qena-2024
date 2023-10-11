import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  user:boolean =true;
constructor(private authService: UserAuthenService){}
  ngOnInit(): void {
    this.user=this.authService.isUserLoggedInOrNot;
    // console.log(this.user);

  }

  loginFunc(){

    this.authService.userLogin("test@gamil.com","1234");
    this.user=this.authService.isUserLoggedInOrNot;
    // console.log(this.user);

  }
  logoutFunc(){
    this.authService.userLogout();
    this.user=this.authService.isUserLoggedInOrNot;
    // console.log(this.user);


  }
}
