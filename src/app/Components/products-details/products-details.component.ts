import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  productID: number = 0;
  product: Iproduct | undefined = undefined;
  productIDSList: number[] = [];
  currentPrdIndex: number = 0;
  // inject
  constructor(
    private prdService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    // convert to number => Number , parseInt , +
    // this.productID = this.activatedRoute.snapshot.paramMap.get('prodID')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('prodID'))
    //   : 0;
    // console.log(this.productID);

    // this.product = this.prdService.getProdByID(this.productID);
    // console.log(this.product);

    this.productIDSList = this.prdService.getProductIDList();
    // console.log(this.productIDSList);

    this.activatedRoute.paramMap.subscribe((param) => {
      this.productID=(param.get('prodID'))?Number(param.get('prodID')):0;
      let foundPrd=this.prdService.getProdByID(this.productID);
      if(foundPrd){
        this.product=foundPrd;
      }
      else{
        alert("Products not found");

        this.router.navigate(['/Products']);
        // this.location.back();
      }
    });
  }
  goBackFunc() {
    this.router.navigate(['/Products']);
    // this.location.back()

  }
  prevFunc() {
    this.currentPrdIndex = this.productIDSList.indexOf(this.productID);
    // console.log(this.currentPrdIndex);
    this.router.navigate([
      '/ProductDetails',
      this.productIDSList[--this.currentPrdIndex],
    ]);
  }
  nextFunc() {
    this.currentPrdIndex = this.productIDSList.indexOf(this.productID);

    this.router.navigate([
      '/ProductDetails',
      this.productIDSList[++this.currentPrdIndex],
    ]);
  }
}
