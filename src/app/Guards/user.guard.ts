import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';

export const userGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserAuthenService);
  const router = inject(Router);
  if (userService.isUserLoggedInOrNot) {
    return true;
  }
  else{
    alert("You must be logged in first!");
    router.navigate(['/UserLogin']);
    return false;
  }
};
