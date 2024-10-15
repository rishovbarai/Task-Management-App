const jwt = require('jsonwebtoken');
const User = require('../models/User');

//protect middlware

const protect = async (req,res,next) => {
    let token;

    // Check for token in headers
    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         // Get token from header
         token = req.headers.authorization.split(' ')[1];
    }
     // If no token, return 401
     if(!token){
        res.status(401).json({message:'Not authorized, no token'});
     }
     try {
         // Verify token
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decode.id).select('-password') // Exclude password from the user object
         // Check if user exists
         if (!user) {
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }
          // Set user in request object
        req.user = user; // Assign user to req.user
        
        next(); // Proceed to the next middleware or route handler

     } catch (error) {
        console.error(error);
        res.status(401).json({message:'Not authorized, token failed'});
     }
};

module.exports={protect};