import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userGuard } from './Guards/user.guard';
import { UserTemplateDrivenFormComponent } from './Components/User/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';

// First Case
// first match wins
const routes: Routes = [
  // {path:"",component:MainComponent}, //default path
  {path:"",redirectTo:'/Home',pathMatch:'full'}, //default path
  {path:"Home",component:MainComponent,title:"Home Page"},
  {path:"Products",component:ProductsListComponent,title:"Products List Page"},
  // {path:"ProductsParent",component:ProductsParentComponent,title:'Products Parent Page',canActivate:[userGuard]},
  {path:"ProductsParent",component:ProductsParentComponent,title:'Products Parent Page'},
  {path:"AboutUs",component:AboutUsComponent,title:'About Us Page'},
  {path:"ProductDetails/:prodID",component:ProductsDetailsComponent,title:'Product Details Page'},
  {path:"UserLogin",component:UserAuthComponent,title:'User Login Page'},
  {path:"UserLogOut",component:UserAuthComponent,title:'User LogOut Page'},
  {path:"UserTemplate",component:UserTemplateDrivenFormComponent,title:'User Template Form Page'},
  {path:"UserReactive",component:UserReactiveFormComponent,title:'User Reactive Form Page'},
  {
    path: 'Orders',
    loadChildren: () => import('./Components/orders/orders.module').then(m => m.OrdersModule)
  },
  {path:"**",component:NotFoundPageComponent,title:"Not Found Page"},
  // not found page => wildcard path

];

// Second Case
// const routes: Routes = [
//   {
//     path: 'main',
//     component: GroupOfRoutesComponent,
//     children: [
//       { path: 'Home', component: MainComponent, title: 'Home Page' },
//       {
//         path: 'Products',
//         component: ProductsListComponent,
//         title: 'Products List Page',
//       },
//       {
//         path: 'ProductsParent',
//         component: ProductsParentComponent,
//         title: 'Products Parent Page',
//       },
//       { path: 'AboutUs', component: AboutUsComponent, title: 'About Us Page' },
//     ],
//   },

//   { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' },
//   // not found page => wildcard path
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
