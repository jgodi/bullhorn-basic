import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobCode } from './job-code';

const API_URL = 'http://mock-job-codes.getsandbox.com';

@Injectable()
export class JobCodeLoader {
  constructor(private http: HttpClient) { }

  getList(): Observable<JobCode[]> {
    return this.http.get<JobCode[]>(`${API_URL}/jobCodes`);
  }

  getDetails(jobCodeId: number): Observable<JobCode> {
    return this.http.get<JobCode>(`${API_URL}/jobCodes/${jobCodeId}`);
  }

  deleteJobCode(jobCodeId: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/jobCodes/${jobCodeId}`);
  }

  postJobCode(jobCode: JobCode): Observable<any> {
    return this.http.post<any>(`${API_URL}/jobCodes`, jobCode);
  }
}
