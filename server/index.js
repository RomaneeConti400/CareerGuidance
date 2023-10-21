import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import errorHandler from './middleware/ErrorHandlingMiddleware.js'; // Замените на путь к вашему middleware
import * as models from './models/models.js'; // Импортируйте все модели, если они находятся в одном файле
import router from './routes/index.js'; // Замените на путь к вашему роутеру

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();