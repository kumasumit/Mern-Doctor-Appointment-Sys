const JWT = require('jsonwebtoken')
module.exports = async(req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode)=>{
        if(err){
          return res.satus(200).send({
            success: false,
            message:'Authorization Failed'
          })
        }else {
        //we enter here only if the token is verified and the verification is successful
        console.log(decode.toString());
        req.body.userId = decode.id;
        next();
    }})
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Auth failed, Token verfication failed',
        })      
    }
  
}