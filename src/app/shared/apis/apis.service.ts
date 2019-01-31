import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {ENV} from '../../app.component'
const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApisService {
  constructor(private http: HttpClient) {

  }
}
