const mongoose = require("mongoose") // new

mongoose
	.connect(process.env.MongoURL)
	.then(() => {
		console.log("Connected Mongo")
	}).catch(()=>{
        console.log("Not connected Mongodb")
    })