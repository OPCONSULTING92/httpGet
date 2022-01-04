import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
import { repos } from './repos';

 
@Injectable()
export class GitHubService {
 
  baseURL: string = "https://api.github.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }

  getContributorStats(userName: string, repoName:string): Observable<any> {
    return this.http.get(this.baseURL + 'repos/' + userName +'/' + repoName +'/contributors')
  }
  // 'use strict';

//   countGithub(userName: string,repoName:string) {
//     const response = fetch(`https://api.github.com/repos/${userName}/${repoName}/contributors`)
//     const contributors = response;
//     const lineCounts = contributors.map((contributorStats: { weeks: any[]; }) => (
//       contributorStats.weeks.reduce((lineCount: any, week: { a: any; d: number; }) => lineCount + week.a - week.d, 0)
//     ));
//     const lines = lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount);
//     window.alert(lines);
// }

  // getLanguages(userName: string): Observable<any> {
  //   return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  // }
 
}