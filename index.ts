import express, { Application, Request, Response } from 'express';
import mongoose, { Document, Schema } from 'mongoose';
import {
  getAllAdsController,
  getAdByIdController,
  createAdController,
  updateAdController,
  deleteAdController,
} from './controllers/adController';

const app: Application = express();

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://mongodb:27017/mydatabase');

const port: number = parseInt(process.env.PORT || '3000', 10);

// Парсер JSON для обробки тіла запиту
app.use(express.json());

// Роут для отримання всіх оголошень
app.get('/ads', async (req: Request, res: Response) => {
  await getAllAdsController(req, res);
});

// Роут для отримання оголошення за ID
app.get('/ads/:id', async (req: Request, res: Response) => {
  await getAdByIdController(req, res);
});

// Роут для створення нового оголошення
app.post('/ads', async (req: Request, res: Response) => {
  await createAdController(req, res);
});

// Роут для оновлення оголошення
app.put('/ads/:id', async (req: Request, res: Response) => {
  await updateAdController(req, res);
});

// Роут для видалення оголошення
app.delete('/ads/:id', async (req: Request, res: Response) => {
  await deleteAdController(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
