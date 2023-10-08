import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent {
listFilter:string = '';
cart:Iproduct[]=[];
addNew(newPrdInCart:Iproduct){

  this.cart.push(newPrdInCart);
}
}
