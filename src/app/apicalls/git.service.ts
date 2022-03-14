import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import { Starred } from '../starred';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private userName = 'onillacerda';
	private clientId = 'e32f823e0316bd241a53';
	private clientSecret= '9a60fcb6810ae6d959718cba246d2a86edee206f';

  constructor(private http:HttpClient){
    this.user = new User ('','','','','',0,new Date())
  }

  user:User;
  repo:Repository;
  star: Starred

  userRequest = (searchName) => {
    interface UserApiResponse{
      avatar_url: string,
      login: string,
      location: string,
      name: string,
      bio: string,
      public_repos: number,
      created_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<UserApiResponse>('https://api.github.com/users/' + `${searchName}` + '?client_id='
      + this.clientId + '&client_secret=' + this.clientSecret).toPromise().then(response=>{
        this.user.avatar = response.avatar_url
        this.user.userName = response.login
        this.user.location = response.location
        this.user.fullName = response.name
        this.user.bio = response.bio
        this.user.repos = response.public_repos
        this.user.joined = response.created_at

        
        resolve()
        return promise;
      }, error => {
        return null;
      })
    })
  }

  repoRequest = (searchName) => {
    interface RepoApiResponse{
      name: string
      description: string
      html_url: string
      updated_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<RepoApiResponse>('https://api.github.com/users/' + `${searchName}` + '/repos?client_id='
      + this.clientId + '&client_secret=' + this.clientSecret).toPromise().then(response => {
        this.repo = response;

        resolve()
      }, error => {
        reject(error)
      })
    })
    return promise;
  }

  starRequest = (searchName) => {
    interface StarApiResponse{
      name: string
      description: string
      html_url: string
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<StarApiResponse>('https://api.github.com/users/' + `${searchName}` + '/starred?client_id='
      + this.clientId + '&client_secret=' + this.clientSecret).toPromise().then(response => {
        this.star = response;

        resolve()
      }, error => {
        reject(error)
      })
    })
    return promise;
  }

}
