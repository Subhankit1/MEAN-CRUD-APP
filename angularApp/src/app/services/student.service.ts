import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  getData():Observable<IStudent[]>{
    return this.httpClient.get<IStudent[]>('http://localhost:3000/students');
  }

  insertData(data:any){
    return this.httpClient.post<IStudent[]>('http://localhost:3000/students',data);
  }

  getDataById(id:any){
    return this.httpClient.get('http://localhost:3000/students/'+id);
  }

  updateData(id:any,data:any){
    return this.httpClient.put('http://localhost:3000/students/'+id,data);
  }

  deleteData(id:any){
    return this.httpClient.delete('http://localhost:3000/students/'+id);
  }
}
