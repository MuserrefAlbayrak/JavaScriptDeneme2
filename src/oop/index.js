export class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}  
    let customer = new Customer(1, "12345");
    console.log(customer.id);
    console.log(customer.customerNumber);
    //prototyping
    customer.name = "Muserref Albayrak";
    console.log(customer.name);

    Customer.bisey = "Bisey";
    console.log(Customer.bisey);

    class IndividualCustomer extends Customer{
        constructor(firstName,id,customerNumber){
            super(id,customerNumber);
            this.firstname = firstName;
        }

    }
    class CorporateCustomer extends Customer{
        constructor(companyName,id,customerNumber){
            super(id,customerNumber);
            this.companyName = companyName;
        }

    }
