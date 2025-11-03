const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes')

const app = express();

//middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/users' , userRoutes);

// default route
app.get('/' , (req,res) => {
      res.send('Welcome to Simple Node.js CRUD API')
});
module.exports = app;