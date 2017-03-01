import {Component,OnInit} from '@angular/core'
import {Detail} from '../detail'
import {DetailService} from '../detail.service'
import { Router } from '@angular/router'
@Component({
 selector: 'showtask',
 templateUrl: './app/showtask/showtask.component.html',
 styleUrls: [''],

})
export class Showtaskcomponent implements OnInit {

 detail: Detail[]

 constructor(private service: DetailService, private router:Router) {
  this.detail = this.service.detail
 }

 ngOnInit() {
  this.detail = this.service.detail
 }

 delete(index: number) {
  alert("delete Press On index " + index);
  this.service.detail.splice(index, 1);
 }

 edit(index: number) {
  alert("edit Press On index " + index);
  this.router.navigate(['createtask',index+1]);
 }
}