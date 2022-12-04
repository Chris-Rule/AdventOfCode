import fs from 'fs';

const input = fs.readFile('input.txt','utf8',function(err,data){
    console.log(data);
    return data;
})

