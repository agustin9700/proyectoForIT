const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors')
const taskRoutes = require("./src/routes/task.routes");

app.use(express.json());
app.use(cors())
app.use("/api/tasks", taskRoutes);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
