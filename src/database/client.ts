import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
(async () => {
  try {
    const url = process.env.DATABASE_CONNECTION_URL;
    if (url) {
        await mongoose.connect(url);
        console.log(`Connected to MongoDB @ ${mongoose.connection.host}`);
    } else {
        console.log("url is not defined");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();