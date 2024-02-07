const mongoose = require('mongoose');

let isConnected = false;

async function connectDatabase() {
  if (isConnected) {
    console.log('Database is already connected');
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://shreyanbharadwaj:misschanandlerbong@cluster0.7djkwrb.mongodb.net/ref3r/?retryWrites=true&w=majority");
    isConnected = true;
  } catch (error) {
    console.error('Could not connect to the database', error);
    throw error;
  }
}

// Export the connected mongoose instance
module.exports = {
  connectDatabase,
  mongooseInstance: mongoose,
};