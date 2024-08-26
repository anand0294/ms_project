import express from "express";

const app = express();

//Custom Middleware
app.use((req,res,next)=>{
    console.log(req.method);
    next();
});

app.use((req,res,next)=>{
    console.log(req.hostname);
    next();
});

// app.use((req,res,next)=>{
//     console.log(new Date());
//     //next();
//     req.send("Gurda Uda Diya !!!!!");
// });

const authMiddle = (req,res,next)=>{
    if(req.query.password== "scaler"){
        next();
    } else {
        res.status(401).send("You are not authorized");
    }
};

const fooMiddle = (req,res,next) => {
    console.log("This is FOO Middleware");
    next();
};


//Define the route
app.get('/',(req,res)=>{
    console.log(req.method,req.ip);
    res.send({"type" : "GET","msg" : "Hello using GET"});
})

app.get('/',(req,res)=>{
    res.send("");
})

app.get('/about',authMiddle,(req,res)=>{
    res.status(200).send("About Route");
})

app.get('/contact',(req,res)=>{
    res.send("Conatct Route");
})

app.get('/contact/phone',fooMiddle,(req,res)=>{
    res.send("Contact Phone Route");
})

app.get('/contact/email',(req,res)=>{
    console.log(req.headers.cookie)
    res.send("Contact Email Route");
})
   
app.get('*',(req,res)=>{
    res.send("Path not Found");
})

app.post('/:id',(req,res)=>{
    console.log(req.body);
    res.send("POST Method");
})

app.put('/',(req,res)=>{
    res.send("PUT Method");
})

app.patch('/',(req,res)=>{
    res.send("PATCH Method");
})

app.delete('/',(req,res)=>{
    res.send("DELETE Method");
});

app.listen(8080,()=>{
    console.log("Hello Anand !!");
});