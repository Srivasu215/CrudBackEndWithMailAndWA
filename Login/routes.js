import express from 'express';

var router = express.Router();

// import { router as routerFrombin } from './LoginBin/routes.js';
// import { router as routerLoginAdmin } from './LoginAdmin/routes.js';
import { router as routerForAny } from './ForAny/routes.js';
// import { StartFunc as routerMiddleWaresLoginAdmin } from './MiddleWares/MiddleWares.LoginAdmin/EntryFile.js';

// router.use('/bin', routerFrombin);
// router.use('/LoginAdmin', routerLoginAdmin);
router.use('/ForAny', routerForAny);

export { router };