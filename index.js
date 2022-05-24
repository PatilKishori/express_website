let express = require("express");
let fs = require("fs");
let app = express();

app.use(express.static("public"));
app.get("/",function(req,res){
    // let content = fs.readFileSync(__dirname + "/pages/header.html").toString();
    // content += fs.readFileSync(__dirname + "/pages/index.html").toString();

    // content += fs.readFileSync(__dirname + "/pages/footer.html").toString();
    // res.send(content);   
    res.write(fs.readFileSync("pages/header.html").toString());
    res.write(fs.readFileSync("pages/index.html").toString());
    res.write(fs.readFileSync("pages/footer.html").toString());

});

app.get("/about",function(req,res){
    let content = fs.readFileSync(__dirname + "/pages/header.html").toString();
    content += fs.readFileSync(__dirname + "/pages/about.html").toString();
    content += fs.readFileSync(__dirname + "/pages/footer.html").toString();
    res.send(content);
});

app.get("/contact",function(req,res){
    let content = fs.readFileSync(__dirname + "/pages/header.html").toString();
    content += fs.readFileSync(__dirname + "/pages/contact.html").toString();
    content += fs.readFileSync(__dirname + "/pages/footer.html").toString();
    res.send(content);
});

app.listen(8081,()=>{
    console.log("website running on 8081");
});                                                               