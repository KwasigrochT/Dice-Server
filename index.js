const express = require("express")
const cors = require("cors")

app = express()
const PORT = process.env.PORT || 3000

app.use(cors({origin: '*'}))
app.use(express.json())

function rollDie() {
    return Math.floor(Math.random() * 6) +1
}

app.get("/roll-dice", (req, res) => {
    let dice = []

    for (let i = 0; i<5; i++) {
        let roll = rollDie()
        dice.push("Dice " +i+ " rolled: " + roll)
    }

    res.json({dice})
})

app.get ("/wake-up", (req, res) =>{
    res.json({message: "Server is awake"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
})
