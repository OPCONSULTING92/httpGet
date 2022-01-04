import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contributorStats } from './contributorsStats';

 
export class Repos {
  id!: string;
  name!: string;
  html_url!: string;
  description!: string;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
 
  // userName: string = "tektutorialshub"
  userName: string = "OPCONSULTING92";
  repoName: string ="httpGet"
  baseURL: string = "https://api.github.com/";
  repos!: Repos[];
  contributorStatsArray!: contributorStats[];
 
  
  constructor(private http: HttpClient) {
  }
 
  ngOnInit() {
    this.getRepos()
    this.getContributorStats();
  }
 
 public getContributorStats(){
  return this.http.get<contributorStats[]>(this.baseURL + 'repos/' + this.userName +'/' + this.repoName +'/contributors')
  .subscribe(
    (response) => {                           //Next callback
      console.log('response received')
      console.log(response);
      this.contributorStatsArray = response; 
    },
    (error) => {                              //Error callback
      console.error('Request failed with error')
      alert(error);
    },
    () => {                                   //Complete callback
      console.log('Request completed')
    })
 }
  public getRepos() {
 
    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repos = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }
}
 