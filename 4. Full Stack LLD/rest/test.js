//RugXCvZPNOpuWvuf

const moongoose = require("mongoose");

const DB = "mongodb+srv://anandmohantiwari:asdf1234@cluster0.33ova.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

moongoose.connect(DB, {}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})
