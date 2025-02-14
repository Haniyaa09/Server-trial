import express from "express"
const app = express()
const port = 4000

// 192.168.228.113:4000

app.get('/', (req, res) => {
  res.send('Hello World from Haniya!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})