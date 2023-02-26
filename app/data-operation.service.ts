import { Injectable } from '@angular/core';

interface AppUser{
  username:string;
  password:string;
  role:string;
  photo:string;
 
}

@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  allAppUsers:AppUser[] = [];

  constructor() { 

    let user1:AppUser = {
      username:"ashish",
      password : "123",
      role:"User",
      photo:"profile2.png"
    }

    let user2:AppUser = {
      username:"akshitha",
      password : "123",
      role:"User",
      photo:"profile3.png"
    }
    let user3:AppUser = {
      username:"girija",
      password : "123",
      role:"User",
      photo:"profile4.png"
    }
    let user4:AppUser = {
      username:"harshitha",
      password : "123",
      role:"User",
      photo:"profile1.png"
    }
    let user5:AppUser = {
      username:"admin",
      password : "admin",
      role:"admin",
      photo:"admin1.png"
    }
    this.allAppUsers = [user1,user2,user3,user4,user5];


  }

  doLogin(ipUsername:string,ipPassword:string):boolean
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    console.log("inside Service : "+ipUsername+" & "+ipPassword);
   
    for(let i=0;i<this.allAppUsers.length;i++)
    {
       let thisUser:AppUser = this.allAppUsers[i];

       if(thisUser.username == ipUsername && thisUser.password == ipPassword)
       {

        localStorage.setItem("username",ipUsername);
        localStorage.setItem("role",thisUser.role);
        localStorage.setItem("loginStatus",true+'');
        localStorage.setItem("photo",thisUser.photo);
        
        console.log("inside service for true ");
        return true;
      }

    }


   
    return false;

  }

  doUserLogout()
  {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    console.log("inside Service logout ");
  }

  }
