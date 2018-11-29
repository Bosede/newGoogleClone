// /*
// let a = 100;
// let b = 500;

// console.log(a+b);

// console.log(process.env.NODE_ENV);
// */
// /*
// const bufFromArray = Buffer.from([0x62,0x75, 0x66, 0x65, 0x72]);
// //console.log(bufFromArray.toString());
// const arrayBuffer = new Uint16Array(2);
// arrayBuffer[0] = 5;
// arrayBuffer[1] = 7000;

// const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer)
// console.log(bufFromArrayBuffer);
// */

// /*
// const f = () =>{
//     console.log('Hi');
//     return true;
// }

// const convertNum = function(num){
//     return num + 10;
// }

// const processNum = function(num, fn){
//     return fn(num);
// }

// console.log(processNum(10, convertNum));
// */

// const fs = require('fs')
// let tail = ['zach', 'terry', 'son','hello']
// fs.writeFile('message.txt', tail, (err) =>{
//     if(err){
//         console.log(err)
//         process.exit(1)
//     }else{
//         console.log('Writting is done')
//     }
// });

var assert = require("assert");
describe("Array", function() {
  describe("#indexOf", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it("should not return -1 when the value is present", function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
  });
});

// function checkSpam(str){
//   testString = str.lowerCase();
//   if (testString.includes('viagra')){
//     return true;
//   } else if(testString.includes('free')) {
//     return true;
//   } else if (testString.includes('xxx')){
//     return true;
//   }else
//     return false;
// }

// texting = prompt('Enter name');
// checkSpam(texting);

// function checkSpam(str) {
//   let workableString = str.toLowerCase();
//   if (workableString.includes("viagra")) {
//     alert(`This message is a Spam!!!`);
//   } else if (workableString.includes("free")) {
//     alert(`This message is a Spam!!!`);
//   } else if (workableString.includes("xxx")) {
//     alert(`This message is a Spam!!!`);
//   } else {
//     alert("Not a Spam Message!!!");
//   }
// }

// let textMessage = prompt(`Enter a string `);
// checkSpam(textMessage);
