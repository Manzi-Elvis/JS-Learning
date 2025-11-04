const dotenv = require('dotenv');
dotenv.config();
console.log('Mongo URI:', process.env.MONGO_URI);
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
