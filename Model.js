import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  photo:{
   type:String
  },
   desc: {
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  },
  like:{
    type:Number,
    default:0
  },
  comment:{
    type:Number,
    default:0
  },
  imgCollection: {
    type: Array
},commentCollection:{
  type:Array
}
 
},{ timestamps: true });

const User =  mongoose.model("Model", UserSchema, "posts");
export default User;
