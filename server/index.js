const express = require('express')
const app = express()
const ConnectDB = require('./connection.js')
const ReqRoute = require('./routes/user.route')
const cors = require('cors')
const PORT = 5000
ConnectDB();

if (ConnectDB()) {
    console.log("database is connected");
    }else{
        console.log("error connecting the database");
    }

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
      }));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',ReqRoute)

app.listen(PORT , ()=>{
    console.log(`server is running on PORT ${PORT}`);
    
})