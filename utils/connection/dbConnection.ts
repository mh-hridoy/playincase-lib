import  mongoose from"mongoose"
const URI = process.env.MONGO_URI!
module.exports = () => {
  mongoose.connect(
    URI,
    (err) => {
      if (err) console.log(err)
      console.log("connected to MongoDB")
    }
  )
}
