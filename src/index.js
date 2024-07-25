const express = require("express");
const cors = require("cors");

const mainRouter = require("./routers/mainRoute");

const app = express();
const port = process.env.PORT || 5000;

// Apply CORS with specific options only once
app.use(cors({
  origin: ['https://frontend-seven-lac-46.vercel.app', 'https://pollyb.vercel.app'], // Allow these origins
  credentials: true, // To handle cookies and authentication
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed custom headers
}));

// Parse JSON bodies
app.use(express.json());

// Use routers
app.use(mainRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
