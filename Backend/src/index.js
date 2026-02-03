import dotenv from "dotenv";
import {app} from "./app.js"
import dbConnection from "./db/dbConnection.js"

dotenv.config();

dbConnection().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`)
    })
    .on(("error"), (err)=>{
        console.log(`Error Ocuured While listening to the  port`, err)
    });
    
}).catch((err)=>{
    console.log("Error Occured While Connecting to the database", err)
})