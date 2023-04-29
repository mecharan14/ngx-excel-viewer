import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'excel-viewer';
  data: any = {};
  isFetched = false;
  stopFetching = false;
  eventEmitter = new BehaviorSubject<any>({});
  isEditing = false;
  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.httpClient.get('https://random-data-api.com/api/appliance/random_appliance?size=10')
    .subscribe((res: any) => {
      let temp = [];
      temp.push(Object.keys(res[0]));
      for(let r of res){
        temp.push(Object.values(r));
      }
      this.data['Invoice Info'] = temp;
      this.isFetched = true;
    })
  }

  onScroll(event: any): void {
    if (this.stopFetching) return;
    this.httpClient.get('https://random-data-api.com/api/appliance/random_appliance?size=10')
    .subscribe((res: any) => {
      let temp = this.data['Invoice Info'];
      for(let r of res){
        temp.push(Object.values(r));
      }
      this.data['Invoice Info'] = temp;
      this.eventEmitter.next({ id: "Source", type: "new_data" });
      this.stopFetching = true;
    })
  }

  handleSave(){
    this.eventEmitter.next({id: "Source", type: "save"});
    this.isEditing = false;
  }

  handleCancel(){
    this.eventEmitter.next({id: "Source", type: "cancel"});
    this.isEditing = false;
  }

  onSave(event: any){
    console.log(event);
  }

}
