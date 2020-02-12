import express from 'express';
import bodyParser from 'body-parser';
import config from 'dotenv';
import morgan from 'morgan';
import bookRoutes from './server/routes/BookRoutes';

config.config();

const app = express();

// App middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('combined'));

//All books APIs
app.use('/api/v1/books', bookRoutes);

//when a random route is input
app.get('*',(req,res)=>res.status(200).send({
     message:'Welcome to this API.'
}));

const port = process.env.PORT || 8000;

//Create Server
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
});

export default app;





