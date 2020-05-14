import { register } from '../Controllers/RegisterController'

const registerRoute = (app) => {
  app.route('/register')
    .get((req, res) => 
    res.send('Get request successful'))

    .post(register);

  app.route('/register/:id')
    .put((req, res) => 
    res.send('Put request successful'))

  .delete((req, res) => 
    res.send('delete request send successful'));
}

export default registerRoute;