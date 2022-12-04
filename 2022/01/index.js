//read input
var fs = require('fs');

const input = fs.readFileSync('input.txt','utf8',function(err,data){
    return data;
})

//format input
const values = input.split("\r\n");

//store variables
let topThree = [0,0,0];
let tally = 0;

//tally weights
for(let i = 0; i<values.length; i++){
    if(values[i] != ""){
        tally += parseInt(values[i],10);
    } else {
        if(tally > topThree[2]){
            if(tally > topThree[1]){
                if(tally > topThree[0]){ //new highest found
                    topThree[2] = topThree[1];
                    topThree[1] = topThree[0];
                    topThree[0] = tally;
                } else { //new second highest found
                    topThree[2] = topThree[1];
                    topThree[1] = tally;
                }
            } else { //new third highest found
                topThree[2] = tally;
            }
        }
        tally = 0;
    }
}

//print answer
console.log("Part 1 answer = ", topThree[0]);
console.log("Part 2 answer = ", topThree[0] + topThree[1] + topThree[2]);







//const splitData = input.split("/n");

//console.log(splitData);