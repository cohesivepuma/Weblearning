// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const printForecast = function(arr){
    let totalStr = `...`;
    for (let i=0;i<arr.length;i++){
        totalStr += `${arr[i]}˚C in ${i+1} days ...`;
    }
    return totalStr;
}
console.log(printForecast([17,21,23]));
console.log(printForecast([12,5,-5,0,4]));
*/
/*
const a = [1,2,3,4,5];
console.log(a.join(""))
*/
/*
function fakeBin(x){
    let arr = x.split("")
    let str = '';
    for(let i=0;i<arr.length;i++){
    if(arr[i]<5){
        str += '0';
    }else{
        str += '1';
    }
}
    console.log(str)
  }
  fakeBin('45385593107843568')
  */
 /*
 const arr = [1,2,3,4,5];
 const newArray = arr.map(eachItem => {
    return eachItem * 2;
 })
 console.log(newArray);
 */
const double = item => item * 2;
const arr = [1,2,3,4]
const newArr = arr.map(double)
console.log(newArr)
