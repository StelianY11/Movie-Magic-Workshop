import routes from "./routes.js";
import handlebarsInit from "./config/hbsInit.js";
import expressInit from "./config/exporessInit.js";

const app = express();

handlebarsInit(app);

expressInit(app);

app.use(routes);

app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));