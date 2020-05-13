import "reflect-metadata";
import express from 'express'
import bodyParser  from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { getAlerts , createAlert} from "./routes/alert/alert.router";

const routes = require('./routes');

const app = express();
createConnection();

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api/alerts', getAlerts);
app.use('/api/alerts', createAlert);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})