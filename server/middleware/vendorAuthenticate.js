const jwt = require('jsonwebtoken')
const Bank = require('../models/Bank')


const BankAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.inv_man.token;
        const role = req.cookies.inv_man.role;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        
        const findBank = await Bank.findOne({_id:verifyToken._id, "tokens.token":token})

        if(!findBank){
            throw new Error("Login Expired")
        }

        if(role!=="bank"){
            res.status(401).json({msg:'Unauthorized access'})
        }

        req.token=token
        req.findBank=findBank
        req.userID=findBank._id
        next()
    } catch (error) {
        res.status(401).json({msg:'Unauthorized access'})
    }
}

module.exports = BankAuthenticate