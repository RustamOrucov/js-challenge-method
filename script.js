// !===================== homework 1 ===============

// const moveZeroes=nums=>{
//    let newNum=nums.filter(item=>{
//      return  item===0
//    });
//    let newNum2=nums.filter(item=>{
//     return item !==0
//    })
     
//    return newNum2.concat(newNum)
// }

// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0,0,1]));
// console.log(moveZeroes([0]));

// !==================== homework 2==================

// const findShort=str=>{
//    let arr=[]
//     let newstr=  str.split(' ')
//      for(let i=0;i<newstr.length;i++){
//         arr.push(newstr[i].length)
//      }
//      arr.sort((a,b)=> a-b)
//      return arr[0]
// }
// console.log(findShort('Test where final word shortest see'));
// console.log(findShort('lets allgo on holiday somewhere very cold'));
// console.log(findShort('i want to travel the world writing code one day'));

// !========================== homework 3 =============

// const century=year=>{
//     return Math.ceil(year/100)

// }
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
// console.log(century(89));

// !======================= homework 4======================

// function firstNonRepeatingLetter(str) {
//     str = str.toLowerCase();

//     const charCount = {};
 
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
//       if (char.match(/[a-z]/)) {
//         charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//       }
//     }

//     let leastOccurringFirstLetter = null;
//     let leastOccurrence = Number.MAX_SAFE_INTEGER;
  
//     for (const char in charCount) {
//       if (charCount[char] < leastOccurrence) {
//         leastOccurrence = charCount[char];
//         leastOccurringFirstLetter = char;
//       }
//     }
  
//     return leastOccurringFirstLetter;
//   }
  
// console.log(firstNonRepeatingLetter('stress'));
// console.log(firstNonRepeatingLetter('sTreSS'));
// console.log(firstNonRepeatingLetter('abba'));
// console.log(firstNonRepeatingLetter('Go hang a salami,I"m a lasagna hog!'));

// !==================== homework 5==================

const getCount=str=>{
  let vowels=['a','e','i','o','u']
   let counter=0
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                counter++
            }
        }
    }
return counter
}
console.log(getCount('my pyx'));
console.log(getCount('pear tree'));
console.log(getCount('abracadabra'));
console.log(getCount('o a kak ushakov lil vo kashu kakao'));