import mongoose from "mongoose";




//*********************database*****************
export const connectDb=()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "BackendApi",
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
}


//************************************************ */