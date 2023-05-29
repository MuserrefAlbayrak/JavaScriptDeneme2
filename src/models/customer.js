import User from "./user.js";

/*
Classlari; yazilimda surdurulebilirligi saglamak, 
yazilim gelistirme prensiplerini uygulamak icin classlarda vb. 
bunu destekledigimiz yapilardan faydalaniyoruz. Ornegin Java'da interface 
bu anlamda bir nimet niteligindedir. JavaScript'te interface olmadigindan
bu noktada TypeScript'ten faydalaniyoruz. 
*/
export default class Customer extends User {
  constructor(id, firstName, lastName, city, age, creditCartNumber) {
    super(id, firstName, lastName, city, age);
    this.creditCartNumber = creditCartNumber;
  }
}
