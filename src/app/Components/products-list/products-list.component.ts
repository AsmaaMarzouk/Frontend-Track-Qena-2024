import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  // productsList: Iproduct[];
  flag: boolean = true;
  // userName:string="Ahmed from ts";
  productsListFilter: Iproduct[] = [];
  // set listFilter(value:string){
  // set listFilter(value: string) {
  //   // this.listFilter=value;
  //   // console.log("In Setter: ",value);

  //   this.productsListFilter = this.performFilter(value);
  //   //  console.log(this.productsListFilter);
  // }

  // Day4
  @Input() set listFilterInChild(value: string) {
    // this.listFilter=value;
    // console.log("In Setter: ",value);

    // this.productsListFilter = this.performFilter(value);
    //  console.log(this.productsListFilter);

    // Day5
    this.productsListFilter = this.prdService.performFilter(value);
  }

  //  @Output() onaddNewPrd:EventEmitter<Iproduct>;

  @Output() onaddNewPrd = new EventEmitter<Iproduct>();

  // ##################################
  // test:string="hello"
  date1: Date = new Date();

  // inject
  constructor(private prdService: ProductsService,private router: Router) {
    // Day4
    // this.onaddNewPrd=new EventEmitter<Iproduct>();
    // ###########################
    // tables => 1 , chairs =>2 , tv units=>3
    // this.productsList = [
    //   {
    //     id: 2,
    //     name: 'Anders Glass Top Coffee Table',
    //     price: 11200,
    //     quantity: 0,
    //     categoryID: 1,
    //     Material: 'Glass',
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/165097472-165097472-HC21122022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Alex Armless Study Chair',
    //     price: 2000,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160540419-160540419-HC020718_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
    //     categoryID: 2,
    //     Material: 'Fabric',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];
  }
  ngOnInit(): void {
    // this.listFilter="";
    // this.productsListFilter = this.productsList;
    // this.productsListFilter=Array.from(this.productsList);

    // Day5
    this.productsListFilter = this.prdService.getAllProducts();
  }

  toggleImage() {
    this.flag = !this.flag;
  }

  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.name.toLowerCase().includes(filterValue)
  //   );
  // }

  // Day4

  addToCart(val: Iproduct) {
    // console.log(val);
    this.onaddNewPrd.emit(val);
  }


  // Day5
  prdDetails(prdID:number){

    this.router.navigate(['/ProductDetails',prdID]);
  }
}
