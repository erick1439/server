import { register } from '../Controllers/RegisterController'

const registerRoute = (app) => {

  app.post('/register', register);

}

export default registerRoute;