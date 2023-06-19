const jwt = require('jsonwebtoken');
exports.auth = async (req,res,next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if(!token) {
    return res.status(401).json({error: 'Unauthorized'});
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  }catch(err) {
    return res.status(401).json({error: 'Invalid token'});
  }
}