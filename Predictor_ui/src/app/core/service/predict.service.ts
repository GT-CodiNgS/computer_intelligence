import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TweetDto } from '../dto/TweetDto';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  generate(data: TweetDto): Observable<any> {
    return this.httpClient.post(this.url + 'predict', data);
  }
}
