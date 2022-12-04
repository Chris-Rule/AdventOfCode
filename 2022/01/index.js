//read input
var fs = require('fs');

const input = fs.readFileSync('input.txt','utf8',function(err,data){
    return data;
})

//format input
const values = input.split("\r\n");

//store variables
let result = 0;
let tally = 0;

//find highest weight
for(let i = 0; i<values.length; i++){
    if(values[i] != ""){
        tally += parseInt(values[i],10);
    } else {
        if(tally > result){
            result = tally;
        }
        tally = 0;
    }
}

//print answer
console.log("result = ", result);







//const splitData = input.split("/n");

//console.log(splitData);