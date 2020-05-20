import "reflect-metadata";
import express from 'express'
import bodyParser  from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { getAlerts , createAlert} from "./routes/alert/alert.router";
import { getAlertsSearch } from './routes/alert/search/search.router'

const app = express();
createConnection();
const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/alerts', getAlerts);
app.use('/api/alerts/search', getAlertsSearch)
app.use('/api/alert', createAlert);

app.listen(3001, () => {
    console.log("Server running on port 3001")
})

module.exports = app;