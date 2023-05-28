//Elimizdeki arrayi filtrelemeye yarar. !Yepyeni bir array çıkartır.! 
//Filter'ın sonucu sıfır eleman bile olsa yeni bir array oluşturur. 
//Bu neden önemli? -> Angular react vue'da state management denen bir olay var.
//Yani bir data değiştiğinde ekran yeniden render edilmesi için.  
//!!Ekran yeniden render edilmesi için referans'ın değişmesi gerekir eğer referans tip ise.
//filter yapıldığında ekran yeniden render edilir yeni array oluşturduğu için.
//O yüzden slice veya splice kullanmıyoruz. Onlar referans değiştirmez. Ekstra işlem gerektirir. 

let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

 products.map(product=>{
     console.log(product)
     console.log(`<li>${product.name}</li>`)
})

let filteredProducts = products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)


let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)
console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)
//-----------------------------------------------------------------------

let cart = [
    {id:1, productName:"Telefon",quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2, unitPrice:30},
    {id:3, productName:"Kalem",quantity:1, unitPrice:20},
    {id:4, productName:"Sarj Cihazi",quantity:2, unitPrice:100},
    {id:5, productName:"Kitap",quantity:3, unitPrice:30},
    {id:6, productName:"Pot",quantity:5, unitPrice:150},
];
//map() iterasyon yapiyor array'i dolanmakta. boylece istersen bi aksiyonda bulunabilirsin
//istersen de manipule ederek yepyeni bir array de olusturabilirsin. lambda'daki map gibi biraz

cart.map(product=>console.log(product.productName))//sepeti dolas herbir product icin productName'i ver
/*
output=> Telefon
         Bardak
         Kalem
         Sarj Cihazi
         Kitap
         Pot
*/

cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice*product.quantity)
})
/*
output=>        Telefon : 12000
                Bardak : 60
                Kalem : 20
                Sarj Cihazi : 200
                Kitap : 90
                Pot : 750
*/

//data'nin icinde arama yapmak istersen, filtreleme yapmak istersen etc.
let quantityOver2 = cart.filter(product=>product.quantity>2 && product.productName.match('o'));
console.log(quantityOver2)//Filtrelenen kosula bagli olarak yepyeni bir array elde etmis oldum

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0);
console.log(total);
//S(ingle)P(age)A(pplication)

//push metodu, dizinin sonuna yeni değerler eklemek için kullanılır. 
//İşlem sonucunda ise, dizinin yeni uzunluğunu return eder. JAVA'daki add() gibi.



function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat",quantity:1, unitPrice:20})  
   // console.log(cart);
}
addToCart(cart);
console.log(cart);//burada addToCart(cart); var oldugundan method icinde yeni eklenen veri cart'ta gorunmus olup length 7 olmustur.


let sayi = 10;
function addNumber(number) {
    number+=1;
    
}
//addNumber(sayi);
console.log(sayi);//value type. output=>10

