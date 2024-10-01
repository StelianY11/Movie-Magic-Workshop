import express from 'express';

import routes from "./routes.js";
import handlebarsInit from "./config/hbsInit.js";
import expressInit from "./config/exporessInit.js";
import mongooseInit from './config/mongooseInit.js';

const app = express();

mongooseInit();
handlebarsInit(app);
expressInit(app);

app.use(routes);

app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));