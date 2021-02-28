import pkg from 'express';
const { Router, Response } = pkg;

import TestRoutes from './test/index.js';

class Routes {

  router = Router();

  constructor() {
    this.routes();
  }

  routes = () => {

    this.router.use('/test', TestRoutes);
   
  }
}

export default new Routes().router;