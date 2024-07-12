import express from 'express';
import v1Routers from './v1';
const Router = express.Router();

Router.use('/api', v1Routers);

export default Router;
