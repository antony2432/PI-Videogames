import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
import routerdev from './routes/index.js'


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(routerdev)



export default app
