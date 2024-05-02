
/* -----  question 1 ---- */

console.log("Question 1")

var arr = [1,2,3,4,5];
var res = 0;

for(let i=0; i < arr.length; i++){
    res += arr[i];
}

console.log(res);

/* ------ question 2 ------ */

console.log("Question 2");

var arr = [1, 2, 3, 3, 4, 5];
var ans = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i + 1]) {
    res += arr[i];
  }
}
console.log(res);

/* ------ question 3 ----- */

console.log("Question 3");

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var res = arr1 + "," +arr2 ;

console.log(res);

/* ------ question 4 ------ */

console.log("Question 4");

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [2, 4, 8, 9, 10];

var res = [];


for (let i = 0; i < arr1.length; i++) {
    var temp_i = arr1[i];
    for(let j = 0; j < arr2.length; j++){
        var temp_j = arr2[j];
        if(temp_i == temp_j){
          res.push(temp_i);
        }
    }  
}
console.log(res);

/* ------ question 5 ------ */

console.log("Question 5");

function palin(word) {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    str = word.charAt(i) + str;
  }
  if (str === word) {
    return true;
  } else {
    return false;
  }
}

console.log(palin("man"));
console.log(palin("madam"));
console.log(palin("malayalam"));
console.log(palin("level"));
console.log(palin("march"));

