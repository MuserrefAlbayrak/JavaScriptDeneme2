import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  load() {
    //forof; elimizdeki array'in donmesini saglar
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }

          break;
        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }
          break;
        default:
          this.errors.push(new DataError("Wrong user type", user));
          break;
      }
      console.log(user);
    }
  }

  checkCustomerValidityForErrors(user) {
    //global userValidate class da yapabilirsin
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    //user["age"] ile user.age ayni sey
    for (const field of requiredFields) {
      if (!user[field]) {
        // ` ` => eger bunu kullanirsan ${} yazip curly brace icerisinde js codelari yazmana olanak saglar
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      //hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
    }
    return hasErrors;
  }
  checkEmployeeValidityForErrors(user) {
    //global userValidate class da yapabilirsin
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    //user["age"] ile user.age ayni sey
    for (const field of requiredFields) {
      if (!user[field]) {
        // ` ` => eger bunu kullanirsan ${} yazip curly brace icerisinde js codelari yazmana olanak saglar
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(+user.age))) {
      //parseInt() methodu donusum yaptigi radix'te gecersiz karaktere gelene kadar cevirir.
      //boylece veri 21a oldugunda 21i aliyor direkt. o nedenle + koyduk.
      //hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
    }
    return hasErrors;
  }

  add(user) {
    switch (user.type) {
      case "customer":
        if (!this.checkCustomerValidityForErrors(user)) {
          this.customers.push(user);
        }
        break;
      case "employee":
        if (!this.checkEmployeeValidityForErrors(user)) {
          this.employees.push(user);
        }
        break;
      default:
        this.errors.push(
          new DataError("This user can not be added. Wrong user type ", user)
        );
        break;
    }
    this.loggerService.log(user);
  }
  list() {
    return this.customers;
  }
  getById(id) {
    return this.customers.find((u) => u.id === id); //verilen sarta gore data dondurur find()
  }

  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName < customer2.firstName) {
        return -1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  /*
NOTE: Eger bu class "export default" değil de sadece "export" keyword ile yazilsaydi;
userComponent.js file'da import ifadesi "import UserService from "../services/userService.js";" şeklinde değil de

userComponent.js file'da import ifadesi "import {UserService} from "../services/userService.js";" şeklinde yazardın. bunun nedeni
{UserService} class süslü parantezde olmalı ki {UserService, x, y, z ...} şeklinde yazabilmeme olanak sağlasın. 
*/
/*
daha sonra bu js file'daki spagettiler dinamik hale getirilecek unutma boyle berbat!
*/
}
