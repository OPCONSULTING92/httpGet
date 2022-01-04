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

  getContributorStats(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
  // 'use strict';

// async function countGithub(repo) {
//     const response = await fetch(`https://api.github.com/repos/${userName}/{repoName}/contributors`)
//     const contributors = await response.json();
//     const lineCounts = contributors.map(contributor => (
//         contributor.weeks.reduce((lineCount, week) => lineCount + week.a - week.d, 0)
//     ));
//     const lines = lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount);
//     window.alert(lines);
// }

  // getLanguages(userName: string): Observable<any> {
  //   return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  // }
 
}