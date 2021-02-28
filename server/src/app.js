import express from "express";

import cors           from 'cors';
import morgan         from 'morgan';
import helmet         from 'helmet';
import methodOverride from 'method-override';

  import bodyParser from "body-parser";

  import routes from './api/index.js';

  import mainConfig from './env/index.js';
  import favicon from 'serve-favicon';
  import path from 'path';
  class Server {
    app = express();

    constructor() {
      this.config();
      this.routes();
    }

    config () {
      
      // this.app.use(favicon(path.join(__dirname, '../../client/my-app/public', 'favicon.ico')))

      this.app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
      });
      this.app.use(bodyParser.json({limit:'50mb'})); 
      this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
      /** Enabling cross-origin resource sharing */
      this.app.use(cors());
      // this.app.use('/auth', require('./api/auth'));
      /** Enabling middleware that parses json */
      this.app.use(express.json());
      /** Enabling middleware that parses urlencoded bodies */
      this.app.use(express.urlencoded({ extended: false }));
      /** Enabling method-override */
      this.app.use(methodOverride());
      /** Enabling setting various HTTP headers for security */
      this.app.use(helmet());
      /** Logging api calls */
      if (mainConfig.NODE_ENV !== 'test') this.app.use(morgan('dev'));
    
    }

    routes () {
      this.app.get('/favicon.ico', (req, res) => res.status(204));

      // this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

      

      this.app.use('/api', routes);

    }
  }

  export default new Server().app;