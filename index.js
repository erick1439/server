import express from 'express';
import mongoose from 'mongoose';
import bodyParser from  'body-parser';
import mainPageRoute from './src/Routes/mainPageRoutes';
import registerRoute from './src/Routes/registerRoutes';
import loginRoute from './src/Routes/loginRoutes';
import addUser from './src/Routes/addUserRoutes';

const app = express();
const PORT = 5000;

// Mongodb connection using mongoose 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyParser set up
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mainPageRoute(app);
registerRoute(app);
loginRoute(app);
addUser(app);


app.get('/', (req, res) => {
  res.send("testing this shit");
});

app.listen(PORT, () => {
  console.log(`server working on port ${PORT}`);
});