import { deleteContact } from '../Controllers/DeleteContactController';

const deleteContactRoute = (app) => {
    app.put('/deleteContact', deleteContact);
}

export default deleteContactRoute;