const fs=require("fs")

// fs.writeFile("my.txt","Hellw World",(err)=>{
//     if (err) throw err;
//     console.log("File is Saved");
// })


fs.readFile("./my.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);

})