const express = require('express')
const app = express()

app.use(express.json())

// return inverted string
app.get('/inverted', (req, res) => {
  const { str } = req.body

  const invertedString = str.split('')
    .reverse()
    .toString()
    .replaceAll(',', '')

  res.send(invertedString)
})

const isTruthly = (a, b, c, d) => {
  const args = {a, b, c, d}
  const arr = Object.entries(args)
  const result = arr.filter(([,value]) => value === true)
  const returnedObj = Object.fromEntries(result)

  return returnedObj
}

console.log(isTruthly(a =  true, b = false, c = 1, d = null))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
