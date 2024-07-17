// const userDB = require("../model/userModel");
// const  userpostData= async (req, res) => {
//     try {
//       const { userName,phonNumber,email,location,date } = req.body;
//       const userData = new userDB({ userName,phonNumber,email,location,date });
//       console.log("user name", userData);
//       await userData.save();
  
//       res.json({
//         data: userData,
//       });
//     } catch (error) {
//       res.json({
//         Error: error.message,
//       });
//     }
//   };

// const usergetData= async (req, res) => {
//     try {
//       const myName = req.params.email;
  
//       const getUserData = await userDB.findOne({ email: myName });
  
//       res.json({
//         UserData: getUserData,
//       });
//     } catch (error) {
//       res.json({
//         Error: error.message,
//       });
//     }
//   };
// module.exports = {userpostData,usergetData};
const userDB = require("../model/userModel");

const postUserData = async (req, res) => {
    try {
      const { userName, phonNumber, email, location, date } = req.body;

        // Validate input data
        if (!userName || !phonNumber || !email || !location || !date) {
            return res.status(400).json({ Error: "All fields are required." });
        }

        const userData = new userDB({ userName, phonNumber, email, location, date });
        console.log("User Data:", userData);
        await userData.save();

        res.status(201).json({
            data: userData,
        });
    } catch (error) {
        res.status(500).json({
            Error: error.message,
        });
    }
};

const getUserData = async (req, res) => {
    try {
        const email = req.params.email;

        if (!email) {
            return res.status(400).json({ Error: "Email is required." });
        }

        const userData = await userDB.findOne({ email });

        if (!userData) {
            return res.status(404).json({ Error: "User not found." });
        }

        res.status(200).json({
            userData,
        });
    } catch (error) {
        res.status(500).json({
            Error: error.message,
        });
    }
};

module.exports = { postUserData, getUserData };