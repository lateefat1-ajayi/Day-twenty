require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const repairRoutes = require("./routes/repairRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
connectDB();

const allowedOrigins = [
  'https://day-twenty-1.onrender.com', // frontend URL
  'http://localhost:5173' 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
); 
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/repairs", repairRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server 🏃 on port ${PORT}`));
