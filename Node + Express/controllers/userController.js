const User = require('../models/user')

//Create a new user
exports.createUser = async(req, res) => {
      try{
            const { firstName, lastName, email, password } = req.body;

            if(!firstName || !lastName || email || password ){
                  return res.status(400).json({message: 'All fields are required'})
            }

            const existing = await User.findOne({email});
            if(existing){
                  return res.status(400).json({message: 'Email already exists'})
            }
            const user = await User.create({firstName, lastName, email, password});
            res.status(201).json(user);
      }
      catch(error){
            res.status(500).json({ message: error.message });
      }
};

//Get all users
exports.getAllUsers = async (req, res) => {
      try{
            const users = await User.find();
            res.json(users)
      }
      catch(error) {
            res.status(500).json({message: error.message})
      }
};