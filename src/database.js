import { connect } from "mongoose";

(async () => {
  const db = await connect("mongodb://localhost/store-laptop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Host:", db.connection.host);
  console.log("Database Name:", db.connection.name);
})();
