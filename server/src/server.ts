import Express from "express";
import ProductController from "./controllers/ProductController";
import cors from 'cors';

const app = Express();

const allowedOrigins = ['http://localhost:5173']
const options: cors.CorsOptions = {
    origin: allowedOrigins,
}
app.use(cors(options));

app.use(Express.json());

app.get('/produtos/', ProductController.getProduct);

app.get('/produtos/:id', ProductController.getProduct);

app.delete('/produtos/:id', ProductController.deleteProduct);

app.put('/produtos/:id', ProductController.putProduct);

app.post('/produtos/', ProductController.postProduct);

export {app};
