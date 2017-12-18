import { Injectable } from '@angular/core';
const CONFIG_KEY_NAME = "config";
@Injectable()
export class ConfigProvider {
  constructor() { } 

  getConfigData(): any{
    return localStorage.getItem(CONFIG_KEY_NAME);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }

    if(showSlide)      
      config.showSlide = showSlide;

    if(name)
      config.name = name;

    if(username)
      config.username = username;

    localStorage.setItem(CONFIG_KEY_NAME, JSON.stringify(config));
  }
}
