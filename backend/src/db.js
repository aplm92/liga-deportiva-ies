const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:1234@ligadeportiva.8irn0vy.mongodb.net/LigaDeportiva'
    );
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
