function addToCart(productName) {
    console.log("Sepete Eklendi : " + productName);  
}
//undefined demek; bellekte address yok demek. null ile karistirma (null'da address var)
addToCart(); //output =>> Sepete Eklendi : undefined (JAVA'daki gibi compile time error yasanmadi)
addToCart("Elma")
addToCart("Karpuz")
//eger productName gonderilmezse default degeri olsun dersem syntax;
function addToCart2(productName = "Elma") {
    console.log("Sepete Eklendi : " + productName);  
}
addToCart2(); //output => Sepete Eklendi : Elma
function addToCart3(productName = "Elma", quantity) {
    console.log("Sepete Eklendi : product : " + productName + ", adet : " + quantity);  
}
addToCart3("Karpuz",10);//output=> Sepete Eklendi : product : Karpuz, adet : 10
addToCart3(10);//output=> Sepete Eklendi : product : 10, adet : undefined

//sayHello degiskeninine () bu sekilde sen bir fonksiyonsun demis oldum
let sayHello = ()=>{//arrow function
    console.log("Hello World!")
}
sayHello(); //normal bir fonksiyon gibi calistirmis oldum degiskenimi
//2nd way
let sayHello2 = function () {//klasik function
    console.log("Hello World 2")
}
sayHello2();
//2 yol da ayni calismakta ama this keyword'u noktasinda farkli davranislari var
//********************************** */
function addToCart4(productName, quantity,unitPrice) {//bu yontemi tercih etmemelisin
    
/*Farkli sayfalarda bu method'u kullandigimda parametrelere gelip gelip bakmam lazim karistirmamak icin
bu uc parametreyi ayri ayri yapmak yerine objeler olusturalim bakalim
*/
}
addToCart4("Elma",2,20);


function addToCart5(product) {
    console.log("Ürün : " + product.productName + " Fiyat : " + product.unitPrice + " Adet : " + product.quantity);
}
let product1 = {productName:"Elma", unitPrice:10, quantity:5};
addToCart5(product1);
 let product2 = (product)=>{
    console.log("Ürün : " + product.productName + " Fiyat : " + product.unitPrice + " Adet : " + product.quantity)
 }
 product2(product1);

 let product3 = {productName:"Elma", unitPrice:10, quantity:5};
 let product4 = {productName:"Elma", unitPrice:10, quantity:5};
product3 = product4;
product3.productName = "Karpuz";
console.log(product4.productName);//output=>Karpuz
//Neden Karpuz oldu? 
let sayi1 = "10"
let sayi2 = "20"
sayi1 = sayi2
//sayi2 = 100
console.log(sayi1)//output=>20 

//SONUC: deger ve referans tip kavrami. sayisal veriler; deger tiptir.
//veri obje ya da array ise; referans tiptir. 
//deger tip stack'te tanimlanmakta. (degeri atadigin an bellekte tanimlamis oldun)JAVA'daki mantik ile ayni hemen hemen.

//referans tip; bellekte heap'te (value kismi {productName:"Elma", unitPrice:10, quantity:5}) key kismi stack'te (product3)

//52. satirdaki code'daki durum addressleri esitlemis oldun. 

//ayni anda birden fazla urunu eklemeyi dusunerek;
function addToCart6(products) {
    console.log(products)
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]
addToCart6(products);

function add(number1, number2) {
    console.log(number1 + number2)
}
add(20,30);//50 varArgs yapisi ile istenilen sayi kadar girilebilir limit yok daha kullanisli

function add2(...numbers) {//rest. varArgs icin gecerli her sey bunda da gecerli hep sonda olsun. 
    let total = 0;
    for (let i =0; i < numbers.length; i++) { 
        total+=numbers[i];
    }
    console.log(total);
}
add2(20,30,50);//100
let numbers = [30,40,500,600];
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"Ic Anadolu", population:"15M"},
    {name:"Marmara",population:"23M"},
    {name:"Karadeniz",population:"18M"},
    [
        ["Ankara","Eskisehir"],
        ["Istanbul","Bursa"],
        ["Sinop","Rize"],
    ]
];
console.log(icAnadolu);
console.log(icAnadolu.name);
console.log(icAnadoluSehirleri);
console.log(marmara);
console.log(karadeniz);
console.log(karadeniz);

let newProductName, newUnitPrice, newQuantity;
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elma", unitPrice:10, quantity:5});
console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);

