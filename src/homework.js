/*
JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
*/

let checkPrimeNumbers = (...numbers)=> {
    for (let number of numbers) {
      let isPrime = true;
  
      if (number == 1) {
        isPrime = false;
      } else if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }
      } else {
        isPrime = false;
      }
  
      console.log(`${number} ${isPrime ? 'asal' : 'asal değil'}`);
    }
  }
  checkPrimeNumbers(7, 14, 29, 33, 41);


 //Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
   function areFriends(number1, number2) {
    function getDivisorsSum(number) {
      let sum = 0;
      for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
      return sum;
    }
  
    const sum1 = getDivisorsSum(number1);
    const sum2 = getDivisorsSum(number2);
  
    return sum1 === number2 && sum2 === number1;
  }
  
  const number1 = 220;
  const number2 = 284;
  
  if (areFriends(number1, number2)) {
    console.log(`${number1} and ${number2} are friends!`);
  } else {
    console.log(`${number1} and ${number2} are not friends.`);
  }
  
//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
  function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum === number;
  }
  
  function listPerfectNumbers(limit) {
    const perfectNumbers = [];
    for (let i = 1; i <= limit; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
    return perfectNumbers;
  }
  
  const limit = 1000;
  const perfectNumbers = listPerfectNumbers(limit);
  
  console.log(`Perfect numbers up to ${limit}:`);
  console.log(perfectNumbers.join(', '));
  
//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
 function isPrime(number) {
    if (number < 2) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function listPrimeNumbers(limit) {
    const primeNumbers = [];
    
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    
    return primeNumbers;
  }
  
  const limit2 = 1000;
  const primeNumbers = listPrimeNumbers(limit2);
  
  console.log(`Prime numbers up to ${limit2}:`);
  console.log(primeNumbers.join(', '));  

  //soru
  function someFunction([x],y,z=10) {
    console.log(y)
  }
  someFunction([10000,20000],3000);