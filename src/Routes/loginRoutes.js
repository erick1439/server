import { login } from '../Controllers/LoginController'

const loginRoute = (app) => {
  app.route('/login')
    .get((req, res) => 
    res.send('Get request successful'))

    .post(login);

  app.route('/login/:id')
    .put((req, res) => 
    res.send('Put request successful'))

  .delete((req, res) => 
    res.send('delete request send successful'));
}

export default loginRoute;