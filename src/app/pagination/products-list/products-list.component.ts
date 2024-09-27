import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Product[] = [];
  paginationProducts:Product[]=[];
  currentpage:number =1;
  itemsPerPage:number =5;

  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.updatePaginatedProducts();
    });
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentpage - 1) * this.itemsPerPage;
    this.paginationProducts = this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentpage < Math.ceil(this.products.length / this.itemsPerPage)) {
      this.currentpage++;
      this.updatePaginatedProducts();
    }
  }

  previousPage(): void {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.updatePaginatedProducts();
    }
  }

}
