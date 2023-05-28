export default class UserService{
    constructor(loggerService){
        this.users = [];
        this.loggerService = loggerService;
    }

    add(user){
        this.users.push(user);
        this.loggerService.log(user);
        
    }
    list(){
        return this.users;
    }
    getById(id){
     
        return this.users.find(u=>u.id === id);//verilen sarta gore data dondurur find()
    }

/*
NOTE: Eger bu class "export default" değil de sadece "export" keyword ile yazilsaydi;
userComponent.js file'da import ifadesi "import UserService from "../services/userService.js";" şeklinde değil de

userComponent.js file'da import ifadesi "import {UserService} from "../services/userService.js";" şeklinde yazardın. bunun nedeni
{UserService} class süslü parantezde olmalı ki {UserService, x, y, z ...} şeklinde yazabilmeme olanak sağlasın. 
*/    
}