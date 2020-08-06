const express =require("express");
const app =express();

app.use('/abc',express.static('public'));

app.set('view engine', 'twig');

app.set('views','/expressjs/public/views');

app.get('/',(req,res)=>{

    res.render('index',{title:"tutorial web site",message:'hello world!'});
});


app.get('/about/:a-:b',(req,res)=>{

    res.render('index',{title:"about",sum:parseInt(req.params.a)+parseInt(req.params.b)});
});























app.listen(3000,()=>console.log("server running on port:3000"));
/*




var validation= function(req,res,next){
console.log('middle ware working');
next();
}

app.use(validation);

app.get('/',(req,res)=>{
    res.send("hello world")
});

/*
app.set('view engine', 'ejs');
app.set('views', __dirname+'/public');
app.get("/",(req, res)=>{
   res.render('index');
});
    
app.get("/users",(req, res)=>{
    res.send("users data accessed");
});  

app.get("/users/profile",(req, res)=>{
    res.send("users profile data accessed");
});  
*/
