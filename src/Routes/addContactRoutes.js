import { addContact } from '../Controllers/AddContactController';

const addContactRoute = (app) => {
    app.put('/addContact', addContact);
}

export default addContactRoute;