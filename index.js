import express from "express";

import router from "./routes/mainRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server running on Port: http://localhost:${PORT}`)
);
