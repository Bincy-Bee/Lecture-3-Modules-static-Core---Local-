
const {divii, modu} = require("./bhavin"); //local module import from local module file (bhvain.js) file

let val = divii(77, 11); //call & pass parameters fro imported fn via store in variable
console.log(modu(9, 2)); //call & pass parameters fro imported fn
console.log(val);



//--------------Core module examples static--------------

const fs = require("fs");

// 1) for file create via File system core module

fs.writeFile("text.txt", "Hello Bhavin Welcome to Node JS lecture. ", (err)=>{
    if(err) throw err;
    console.log("File created sucessfully");
})

// 2) For Read file via File system core module

fs.readFile("text.txt","utf-8", (err, data)=>{
    if (err) throw err;
    console.log(data);
});

// 3) for rename file via File system core module

fs.rename("text.txt", "node.md", (err)=>{
    if (err) throw err;
    console.log("Your file renamed sucessfully");
})

// 4) For append data in existing file via File system core module

fs.appendFile("node.md", "Today you are learning about modules of NodeJS.",(err)=>{
    if (err) throw err;
    console.log(" Your data is append sucessfully");
});

// 5) For Delete/unlink your file file via File system core module

fs.unlink("node", (err)=>{
    if (err) throw err;
    console.log("Your File is deleted or unlink sucessfully.")
})