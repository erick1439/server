import { addContact } from '../Controllers/MainPageController';

const mainPageRoute = (app) => {

    //app.route('/contacts').post(addContact);

    app.route('/contacts/:index')
        .put((req, res) => 
            res.send('Put request successfull'))
        
        .delete((req, res) =>
            res.send('delete request successfull'));
}

export default mainPageRoute;