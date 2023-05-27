
// var number = 10;
// number = "Muserref Albayrak"; // "(var number = "Muserref Albayrak";)" bu da calisiyor ilginctir
// console.log(number);//output=>Muserref Albayrak
let number = 10;
number = "Muserref";
console.log(number); //output=>Muserref ancak data type'i let yapinca hata veriyor. var ile vermemisti.

//********** JavaScript, TYPE SAFE degildir. **********
let student = {id: 1, name: "Muserref"}; //object notation
//console.log(student); //output=> {id: 1, name: 'Muserref'} 

function save1() {
    console.log("Saved")
}

save1(); //output=>Saved

function save2(ogrenci) {
    console.log(ogrenci) 
}
save2(student); //output=> {id: 1, name: 'Muserref'}
//Buradaki save() method'unun icerisine ogrenci yazarsam cikti undifened. ayni sekilde method icerisine 11 yazarsam cikti 11 olacak.

function save3(ogrenci, puan = 10) {
    console.log(ogrenci.name + " " + puan);
}
save3(student,100);

function save4(puan = 80, ogrenci) {
    console.log(ogrenci.name + " " + puan);
}
save4(undefined,student);//puanin default degerini aldi undefined yazdigimda. output=>Muserref 80

let students = ["Muserref Albayrak","Uluc Acar","Sehla Albayrak","Inci Albayrak"];
//console.log(students);

let students2 = [student,{id: 2, name: "Uluc"}];
console.log(students2);
/*
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/
let geo = {"lat": "-37.3159","lng": "81.1496"};
let address = {"street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", geo};
let company = { "name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"};
let body = [{"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz", address,"phone": "1-770-736-8031 x56442",
"website": "hildegard.org", company}];
console.log(body);

//rest JS
//params
//varArgs JAVA
let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
}
showProducts(12, [{id: 12, city: "Ankara"}, "Muserref",true]);
console.log(typeof showProducts); //burada fuction atadigimdan showProducts'in data tipi "function" oldu
//data tipini gormek adina ustteki code'u yazdim.


console.log(Math.max(1,2,3,8,90,8));//rest donduruyor bu method ve girilen sayilarin haliyle en buyugunu gorursun
//max([1,2,3,8,90,8]) method'unun icine array olarak yazarsan gorulen mesaj => NaN --> Not a Number

//spread
let points = [1,2,3,4,5,6,7,8];
console.log(...points); //output => 1 2 3 4 5 6 7 8 . bu kisim spread (datalari ayri ayri yazdi sadece)
console.log(Math.max(...points)); //output => 8
console.log(..."ABC","D",..."EFG","H"); //output => A B C D E F G H

//Destructuring

//elimdeki array'in degerlerini degiskenlere atamak istedigimde.
let populations = [10000,20000,30000,[40000,100000]];
let [small,medium,high,[veryHigh,maximum]] = populations;//destructuring
console.log(small);//10000
console.log(medium);//20000
console.log(high);//30000
console.log(veryHigh);
console.log(maximum);

function someFunction([small1],number) {
    console.log(small1); 
}
someFunction(populations);//10000

let category = {id:1 , name1:"Icecek"};
console.log(category.id);
console.log(category["name1"]);

//objenin istenen elemanlarini atama yontemi

let{id,name1} = category;
console.log(id);
console.log(name1);

//Redux mimarisinde kullanilan bir yapidir.