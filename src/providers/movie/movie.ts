import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider'); 
  }
  
  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }  

  getMovieDetail(filme_id) {
    return this.http.get(this.baseApiPath + `/movie/${filme_id}?api_key=` + this.getApiKey());
  }

  getApiKey():String{
    return "7e95f49d7fffd418220c37bd9d7b9ab7";
  }
}
