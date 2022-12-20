import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {
		"id": 1,
		"email": "user1@test.com",
		"name": "User1"
	}, 
  {
		"id": 2,
		"email": "user2@test.com",
		"name": "User2"
	}, {
		"id": 3,
		"email": "user3@test.com",
		"name": "User3"
	}, {
		"id": 4,
		"email": "user4@test.com",
		"name": "User4"
	}, {
		"id": 5,
		"email": "user5@test.com",
		"name": "User5"
	}, {
		"id": 6,
		"email": "user6@test.com",
		"name": "User6"
	},
	{
		"id": 7,
		"email": "user7@test.com",
		"name": "User7"
	},
	{
		"id": 8,
		"email": "user8@test.com",
		"name": "User8"
	},
	{
		"id": 9,
		"email": "user9@test.com",
		"name": "User9"
	}
]

  getUsers(){
    return this.users
  }

  updateUser(id:number, email:string){
    const objIndex = this.users.findIndex((obj => obj.id == id));
    if(this.users[objIndex]){

      this.users[objIndex].email = email
    }
  }

}
