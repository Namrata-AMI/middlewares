const express = require("express");
const app = express();
const ExpressError = require("./EpressError.js");

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }
    else{
        throw new ExpressError(401,"ACCESS DENIED!!");
    }
};


app.get("/api", checkToken,(req,res)=>{
    res.send("data");
});

app.use("/random",(req,res,next)=>{
    console.log("i am only for random");
    next();
})

app.get("/",(req,res)=>{
    console.log("working");
    res.send("hii, i am root");
});

app.get("/wrong",(req,res)=>{
    abcd = abcd ;

});

app.get("/admin" ,(req,res)=>{
   // res.status(500).send("error occured");
   throw new ExpressError(403,"Access  Forbiden!!")
})

app.use((err,req,res,next)=>{
    let {status=500,message="some error occured"} = err;
    res.status(status).send(message);
});



/*app.use((err,req,res,next)=>{
    console.log("---error2---");
    next(err);
});*/



app.listen(8080,()=>{
    console.log("server is listening to 8080");
});
