import express from 'express';
import bodyParser from 'body-parser';
import config from 'dotenv';

import bookRoutes from './server/routes/BookRoutes';

const app = express();
config.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT || 8000;

//apis
app.use('/api/v1/books', bookRoutes);

//when a random route is input
app.get('*',(req,res)=>res.status(200).send({
    message:'Welcome to this API.'
}));

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
});

export default app;





