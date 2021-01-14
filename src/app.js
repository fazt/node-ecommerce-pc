import express from "express";
import config from "./config";
import path from "path";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index";

const app = express();

// Settings
app.set("port", config.PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

// Global Variables
app.locals.title = "Fazt Tech Store";

// Routes
app.use(indexRoutes);

export default app;
