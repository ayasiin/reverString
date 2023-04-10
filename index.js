function reverseString(str){

/*let reverseString = '';
for(let i = str.length -1 ;i>= 0;i--){
 //reverseString= reverseString +str[i]

//}
// return reverString;

let String ='';
for(let char of str){
 reverseString = char + reverseString
}

return reverseString


}*/

let reverWord = '';
str.split('').forEach(char => reverWord= char + reverWord);
return  reverWord;

}
const outPut = reverseString('hello world');
console.log(outPut)
