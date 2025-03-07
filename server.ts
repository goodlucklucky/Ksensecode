import express, { Request, Response } from 'express'

const app = express()
const port = 5000

app.use(express.json())

app.post('/webhook', (req: Request, res: Response) => {
    // Output received payload
    console.log('Payload:', req.body)

    // Store message
    const msg: string = String(req.body.secretMessage)
    if (msg) {
        console.log('Message received:', msg)
        res.status(200).send('Message received!')
    } else {
        res.status(400).send('No message found.')
    }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})