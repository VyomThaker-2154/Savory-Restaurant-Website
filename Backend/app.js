import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./.env" });

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,  // Use underscore (_) instead of hyphen (-)
    methods: ["GET", "POST", "PUT", "DELETE"],  // Add other methods as needed
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],  // Add any custom headers you might use
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
