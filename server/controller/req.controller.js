const Req = require('../models/req.model')

const HandleClientRequest = async(req,res)=>{

    try {
        const {Name , email , message} = req.body;
        // console.log(Name);
        // console.log(email);
        // console.log(message);
        

if (!Name || !email || !message) {
    console.log("enter all the required fields");
    
}

const user = await Req.create({
    Name,
    email,
    message
})

if (user) {
    res.status(200).json({message : "Request created sucessfully"})
}else{
    console.log("Error in request creation");
    
}

console.log( user);
    } catch (error) {
        console.log(error , "Error");
        res.status(400).json({error : "somthing went wrong"})
        
    }


}

const GetClientRequest = async(req,res)=>{
    const user = await Req.find();
    if (user) {
        res.status(200).json({message : "All req are retrieved sucessfully",user})
    }else{
        res.status(500).json({error : "error in req  retrival"})
    }
}


module.exports = {
    HandleClientRequest,
    GetClientRequest
}