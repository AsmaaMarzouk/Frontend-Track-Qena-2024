import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { CalcDiscountPipe } from './Pipes/calc-discount.pipe';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { UserTemplateDrivenFormComponent } from './Components/User/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ProductsListComponent,
    ImgStyleDirective,
    CalcDiscountPipe,
    ProductsParentComponent,
    AboutUsComponent,
    NotFoundPageComponent,
    GroupOfRoutesComponent,
    ProductsDetailsComponent,
    UserAuthComponent,
    UserTemplateDrivenFormComponent,
    UserReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
