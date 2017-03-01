import {Injectable} from '@angular/core';
import {Detail} from './detail';
@Injectable()
export class DetailService {
  detail: Detail[]=[{
    date: 'hello',
    title: 'this',
    description: 'desc',
    priority: 3
  }]
}
