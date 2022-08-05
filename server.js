import express from "express";
import { engine} from "express-handlebars";

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.


app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
import router from "./controllers/burgers_controller.js";

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
