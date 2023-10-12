import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css'],
})
export class UserTemplateDrivenFormComponent {
  user:Iuser={} as Iuser;
  constructor(private userService: UsersService,private router:Router) {}

  addNewUser() {
//     let u: Iuser = {
//       email: 'sara@gmail.com',
//       lastName: 'Ali',
//       firstName: 'Sara',


//     };

// this.userService.signUpUsers(u).subscribe(
//   {
//     next:(user)=>{
//       console.log(user);

//       this.router.navigate(['/Products']);

//     },
//     error:(err)=>{
//       console.log(err);
//     }
//   }
// )


this.userService.signUpUsers(this.user).subscribe({
  next:(user)=>{
    console.log(user);
    this.router.navigate(['/Products']);

  },
  error:(err)=>{
    console.log(err);

  }
})
  }
}
