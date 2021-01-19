import app from "./app";
import "./database";

app.listen(app.get("port"));
console.log(`Server Address: http://localhost:${app.get("port")} 🚀`);
console.log(`Environment: ${app.get("env")}`);
