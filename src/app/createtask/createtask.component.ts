import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
import {ActivatedRoute, Router} from "@angular/router";
@Component({
 selector: 'createtask',
 templateUrl: './app/createtask/createtask.component.html',
 styleUrls: ['']
})
export class Createtaskcomponent implements OnInit {
 detail: Detail[]
 index:number;
 details:Detail=new Detail();
 
 constructor(private service: DetailService, private route: ActivatedRoute, private router:Router) {
  this.detail = this.service.detail
 }

 ngOnInit() {
 this.details.date="";
 this.details.title="";
 this.details.description="";
  this.details.priority=0;
 
  this.detail = this.service.detail

  this.route.params.subscribe((data: any) => {
   
   this.index = +data.id;
   alert(this.index)
  if(this.index){
  // console.log("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
   this.details=this.service.detail[this.index-1];
   alert("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
  }
  });
 }

 submit(date: string, title: string, desc: string, priority: number, event: Event) {
  event.preventDefault();
  // console.log("test : "+JSON.stringify(detail));
  console.log("date : " + date + "title " + title + "desc " + desc + "priority : " + priority);
  //alert(date);

  let p = new Detail();

  p.date = date;
  p.description = desc;
  p.title = title;
  p.priority = priority
  //   alert(p.date);

  this.service.detail.push(p);
  //  alert("Submit clicked"+JSON.stringify(p));
 }
}
