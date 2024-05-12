const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./route/bookingRoutes');
const routes = require('./route/routes');
const merchRoutes = require('./route/merchRoutes');
const foodRoutes = require('./route/foodRoutes');

const app = express();
const PORT = 9992;

// Use CORS middleware before defining routes
app.use(cors({
  origin: "http://localhost:4200",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/abc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
});

app.use(express.json());
app.use(bookingRoutes);
app.use(routes);
app.use(merchRoutes);
app.use(foodRoutes);
