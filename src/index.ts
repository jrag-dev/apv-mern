import app from "./app"
import dbConnect from "./config/db"

function main() {
  try {
    dbConnect()
    const defaultPORT = 4000
    const port = process.env.PORT || defaultPORT
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`)
    })
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}

main()
