import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()

app.get("/", (req, res) => {
  res.json({ msg: "apv" })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
