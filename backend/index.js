const express = require("express");
const app = express();
const PORT = 3000;
const taskRoutes = require("./routes/task.routes");

app.use(express.json());
app.use("/api/tasks", taskRoutes);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
