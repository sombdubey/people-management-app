const express = require('express');
const mongoose = require('mongoose');
const personRouter = require('./routes/person');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/peopleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection failed:', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', personRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
