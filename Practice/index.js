function first() {
  const btnL = document.getElementById("btnL");
  const btnR = document.getElementById("btnR");
  const count = document.getElementById("count");

  let val = parseInt(count.innerText);

  btnL.addEventListener("click", () => {
    if (val === 0) {
      val.innerText = 0;
    } else {
      val--;
      count.innerText = val;
      // console.log(val);
    }
  });

  btnR.addEventListener("click", () => {
    if (val < 10) {
      val++;
      count.innerText = val;
      // console.log(val);
    }
  });
}

first();
// /************************ 1st task end ******************************/

function secound() {
  const ProductList = document.getElementById("ProductList");
  const showHidebtn = document.getElementById("showHidebtn");

  let show = true;

  showHidebtn.addEventListener("click", () => {
    if (show === true) {
      console.log("true");
      show = false;
      ProductList.style.display = "none";
      showHidebtn.innerText = "Show";
    } else {
      ProductList.style.display = "block";
      showHidebtn.innerText = "Hide";
      show = true;
      console.log("flase");
    }
  });
  document.addEventListener("click",(e)=>{
    if(showHidebtn !== e.target){
      ProductList.style.display = "block";
      showHidebtn.innerText = "Hide";
      show = true;
      console.log("progetion");
    }
  })
}

secound();

/************************ 2nd task end ******************************/

// function todoApp() {
//   const userInput = document.getElementById("userInput");
//   const addTtn = document.getElementById("addTtn");
//   const pera = document.getElementById("pera");
//   const list = document.getElementById("list");
// }

// todoApp();

/************************ 3rd task end ******************************/

// isPrime

// function isPrime(num) {
//   if (num === 1) {
//     return false;
//   } else if (num === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// console.log(isPrime(10));

//  123 sunOfNumDigts

// function sunOfNumDigts(num) {
//   let str = num.toString().split("");

//   let val = 0;

//   str.forEach((element) => {
//     let str2 = parseInt(element);
//     val += str2;
//   });
//   console.log(val);
// }

// sunOfNumDigts(4567);

//  check ispelindrom

// 121 = 121 , 111 = 111;

// function isPelindrome(num) {
//   let originalNum = num.toString();
//   let revString = originalNum.split("").reverse().join("");

//   return originalNum === revString;
// }

// console.log(isPelindrome(1245));

// string compression  sacd

// function compresionString(str) {
//   let count = 1;
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       ans += str[i] + count;
//       count = 1;
//     }
//   }
//   console.log(ans);
// }

// compresionString("aaafffsssb");

//  sorted array marge;

//  [12,24,30] = [45,14,75]

// function sortedArry(arr1, arr2) {
//   //   let arr1 = [1, 5, 7];
//   // let arr2 = [14, 45, 12];

//   let ansArr = [...arr1, ...arr2].sort((a, b) => b - a);

//   console.log(ansArr);
// }

// sortedArry([14, 12, 5, 4], [75, 45, 2, 3]);

//  2 sum
//  [1,2,3,4,5] target  = 9;

// console.log(array);

// let array = [1, 2, 4, 5];
// let taregt = 9;
// function twoSum(array,target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] === taregt) {
//         return [array[i],array[j]]
//       }
//     }
//   }
// }

// console.log(twoSum(array,taregt));

//  revers arr
// max of arr

//  remove dublicat

// let arr =  [ 1,2,4,4,5,7,7];

// let makeArr = [];

// arr.forEach((el)=>{

// })

// let a = Array.from(new Set(arr))
// console.log(a);

//  is Prime Number;
//  sum of natural number;
//  sum of digit numbers;
// check palindrolme;

// let arr = [12, 45, 75, 25, 14];

// let max = arr[0];

// for(let i=1;i<arr.length;i++){
//   if(arr[i] > max){
//     max = arr[i]
//   }
// }

// console.log(max);


// const max = Math.max(...arr)

// console.log(max);



// readeMore Task Start

function readeMore(){
  const pera2El = document.getElementById("pera2");

  const readMoreEl = document.getElementById("read-more");
  
  let togal = false;
  
  readMoreEl.addEventListener("click", (event) => {
    event.stopPropagation();
    if (togal == false) {
      togal = true;
      pera2El.style.display = "block";
      readMoreEl.textContent = "Less...";
    } else {
      pera2El.style.display = "none";
      readMoreEl.textContent = "Read More...";
      togal = false;
    }
    console.log("readMoreEl huaa he");
  });
  
  document.addEventListener("click", () => {
    console.log("documen log huaa");
    pera2El.style.display = "none";
    readMoreEl.textContent = "Read More...";
    togal = false;
  });
}


readeMore()

// readeMore Task Start end