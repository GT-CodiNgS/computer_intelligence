import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CountDTO} from "../dto/CountDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  url = environment.baseUrl + 'getDate';

  constructor(private httpClient: HttpClient) {}

  generate(dto:CountDTO): Observable<any> {
    return this.httpClient.post(this.url, dto);
  }


}
