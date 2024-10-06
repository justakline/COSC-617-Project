import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import fs from 'fs'


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    secondName:{
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    primaryLanguage: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})


userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);

  });

const User = mongoose.model('User', userSchema)


// THIS WAS ADDING FAKE DATA INTO THE DATABASE

// fs.readFile("backend/db_data/sampleUsers.json", (error, data) => {
//     if(error){
//         console.error(error)
//         return
//     }

//     // Add the fake data into the database
//     var usersData = JSON.parse(data)
//     usersData.forEach(user => {
//         var u = new User({
//             firstName: user.firstName,
//             secondName: user.secondName,
//             userName: user.userName,
//             email: user.email,
//             password: user.password,  // You may want to hash this before saving
//             primaryLanguage: user.primaryLanguage,
//             isAdmin: user.isAdmin
//         });
//         u.save()
//             .then(() => console.log("User saved successfully"))
//             .catch((err) => console.error("Error saving user:", err));
//     });
// })






export default User