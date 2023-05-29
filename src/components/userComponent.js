import {
  BaseLogger,
  MongoLogger,
  ElasticLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component Loaded!");
//----------------------------------------
let logger1 = new MongoLogger();
let userService = new UserService(logger1);
//Note: userService objesine (altta) UserService class'taki add() methodunu kullanarak 3 data ekledim.
//Ilgili logger da dolayisiyla logger1 objesini console.log yapip gormek istedigimde 3 mesaj gordum.
//eger bir tane daha eklersem 4 log mesaji gorurum.
//----------------------------------------
let user1 = new User(1, "Muserref", "Albayrak", "Ankara");
let user2 = new User(2, "Uluc", "Acar", "Balikesir");
let user3 = new User(3, "Uluc", "Doe", "Istanbul");
//userService.add(user1);
//userService.add(user2);
//userService.add(user3);
//console.log(userService.list());
//console.log(userService.getById(2));

let customer = { id: 1, firstName: "Muserref" };
customer.lastName = "Albayrak";
//console.log(customer.lastName);//output=>Albayrak
//console.log(customer);//output=> {id: 1, firstName: 'Muserref', lastName: 'Albayrak'}

console.log(
  "**************************************************************************************************************"
);
userService.load();

let customerToAdd = new Customer(12, "Pelinsu", "Kiraz", "Ordu", "cvdbfnfgnfg");
customerToAdd.type = "customer";
userService.add(new Customer(customerToAdd));
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());
