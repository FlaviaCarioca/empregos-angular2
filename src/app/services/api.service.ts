import { Inject, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class ApiService{

  constructor(@Inject('API_URL') private api_url: string, private http: Http){}

  // get(url: string, params: any){
  //   this.http.get(url)
  // }

  post(url:string, credentials: Object) {
    let full_url = this.get_full_url(url);
    return this.http
               .post(full_url, { auth: credentials })
               .map((res: Response) => { 
                  return res.json(); 
                })
               .catch((error: any) => Observable.throw(error.json() || 'Server Error'));
  }

  private get_full_url(url: string){
    return this.api_url + `${url}`;
  }

  private get_headers(){
    let headers: Headers = new Headers(); 
    let token = sessionStorage.getItem('token') || '';
    headers.append('X-API-TOKEN', token);
  }
}