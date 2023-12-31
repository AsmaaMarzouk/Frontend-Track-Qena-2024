import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: Iproduct[];

  constructor(private router: Router) {
    this.productsList = [
      {
        id: 2,
        name: 'Anders Glass Top Coffee Table',
        price: 11200,
        quantity: 0,
        categoryID: 1,
        Material: 'Glass',
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/165097472-165097472-HC21122022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
          details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.",
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 17,
        name: 'Alex Armless Study Chair',
        price: 2000,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160540419-160540419-HC020718_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
        categoryID: 2,
        Material: 'Fabric',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet veritatis unde suscipit exercitationem optio fugiat deserunt quia quaerat quisquam impedit tempore, enim quasi amet commodi sed eum? Harum, tenetur."
      },
    ];
   }


  //  get All Products
  getAllProducts():Iproduct[]{

    return this.productsList;
  }
  // filter by name
 performFilter(filterValue: string): Iproduct[] {
    filterValue = filterValue.toLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.name.toLowerCase().includes(filterValue)
    );
  }

  // prdDetails(prdID:number){

  //   this.router.navigate(['/ProductDetails',prdID]);
  // }

  getProdByID(prdID:number):Iproduct|undefined{
    return this.productsList.find(prd=>prd.id==prdID);

  }
  getProductIDList():number[]{

    return this.productsList.map(prd=>prd.id);
  }

}
