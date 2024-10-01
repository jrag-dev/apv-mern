import mongoose from "mongoose"

const dbConnect = async () => {
  try {
    const URI =
      process.env.MONGO_URI ||
      "mongodb+srv://josealvarado:<db_password>@cluster0.phg4n.mongodb.net/veterinaria"
    const db = await mongoose.connect(URI, {})

    const url = `${db.connection.host} : ${db.connection.port}`
    console.log(`MongoDB connect on: ${url}`)
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error: ${err.message}`)
      process.exit(1)
    }
  }
}

export default dbConnect
