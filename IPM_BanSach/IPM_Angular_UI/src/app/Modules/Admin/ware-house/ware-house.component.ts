import { Component } from '@angular/core';
import { WareHouseService } from 'src/app/Service/admin/ware-house.service';

@Component({
  selector: 'app-ware-house',
  templateUrl: './ware-house.component.html',
  styleUrls: ['./ware-house.component.scss']
})
export class WareHouseComponent {
  constructor(private service:WareHouseService){}
  wareHouse:any;
  pageIndex: number = 1;
  total:number = 0;
  totalPageArray: number[] = []
  ngOnInit(){
    this.loadData()
  }
  loadData(){
    this.service.getWareHouseById(1, this.pageIndex).subscribe(res => {
      const productCount = Number(res.total.total);
      this.total = Math.ceil(productCount / 8)
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
      this.wareHouse = res.results;
    })
    
  }
  nextPage(){
    if(this.pageIndex<this.total){
      this.pageIndex++;
      this.loadData();
    }
    
  }
  previousPage(){
    if(this.pageIndex>0){
      this.pageIndex=Math.max(1,this.pageIndex--);
      this.loadData();
    }
    
  }
  setPage(pageInDex:any){
    this.pageIndex = pageInDex;
    this.loadData();
  }
}
