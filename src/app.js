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

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// Error Handlers
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// Global Variables
app.locals.title = "Fazt Tech Store";

export default app;
