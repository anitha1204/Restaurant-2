const userDB = require("../model/userModel");
const  userpostData= async (req, res) => {
    try {
      const { userName,phonNumber,email,location,date } = req.body;
      const userData = new userDB({ userName,phonNumber,email,location,date });
      console.log("user name", userData);
      await userData.save();
  
      res.json({
        data: userData,
      });
    } catch (error) {
      res.json({
        Error: error.message,
      });
    }
  };

const usergetData= async (req, res) => {
    try {
      const myName = req.params.email;
  
      const getUserData = await userDB.findOne({ email: myName });
  
      res.json({
        UserData: getUserData,
      });
    } catch (error) {
      res.json({
        Error: error.message,
      });
    }
  };
module.exports = {userpostData,usergetData};
