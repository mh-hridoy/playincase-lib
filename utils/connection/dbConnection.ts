import  mongoose from"mongoose"
const URI = process.env.MONGO_URI!
export const dbConnection = () => {
  mongoose.connect(
    URI,
    (err) => {
      if (err) console.log(err)
      console.log("connected to MongoDB")
    }
  )
}
