import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabCollectionService {

  API_Url = environment.API_Url
  constructor(private http:HttpClient) { }
  labCollectionAll(data:any){
    return this.http.post(this.API_Url + 'labCollection/All', data)
    }
}
