const mongoose = require('mongoose');
const app = require('./backend');

async function startServer() {
    try {
      await mongoose.connect("mongodb://localhost:27017/myDb");
      console.log("Database is connected");
      app.listen(5000, () => {
        console.log(`Server running on port 5000`);
      });
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }

  startServer();