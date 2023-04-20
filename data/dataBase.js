import mongoose from "mongoose";




//*********************database*****************
export const connectDb=()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "BackendApi",
  })
  .then((c) => console.log(`DB Connected ${c.connection.host}`))
  .catch((err) => console.log(err));
}


//************************************************ */