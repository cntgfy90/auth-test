import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

export default () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    
    app.use('/', routes());
    
    return app;
};
