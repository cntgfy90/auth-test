require('dotenv').config();
import createConnection from './database';
import config from './config/config';
import app from './app';

export default createConnection().then(() => {
    app().listen(config.serverPort, () => {
        console.log(`Server is started on port ${config.serverPort}`);
    });
});
