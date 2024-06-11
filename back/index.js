import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import weatherRoutes from './routes/search.route.js'
import cors from 'cors';

const app = express();

const port = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api', weatherRoutes);

mongoose.connect('mongodb+srv://sasra:sasra@cluster0.yklpnxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log("Conexión con base de datos establecida"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Puerto:', port));