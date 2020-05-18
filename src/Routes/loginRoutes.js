import { login } from '../Controllers/LoginController'

const loginRoute = (app) => {

  app.post('/login', login);

}

export default loginRoute;