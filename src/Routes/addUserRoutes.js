import { addUser } from '../Controllers/AddUserController';

const addUserRoute = (app) => {

    app.put('/addUser', addUser);
}

export default addUserRoute;