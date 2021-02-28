import pkg from 'express';
const { Router, Response } = pkg;
import Services from './service.js';
import { getErrorResponse } from '../mainModels.js';
import APIError from '../../services/APIError.js';

class TestRoutes {
   router = Router();

  constructor() {
    this.routes();
  }

   routes = () => {
    this.router.post('/test', this.test);
  }

   test = async (req, res) => {
    try {
      const response = await Services.test();
      res.send(response);
    } catch (e) {
      new APIError(e, 500, 'test function in test/service.js');
      res.status(500).send(getErrorResponse());
    }
  }
}

export default new TestRoutes().router;