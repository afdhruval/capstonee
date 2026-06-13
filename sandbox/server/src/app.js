import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/api/sandbox/health", (req, res) => {
  return res.status(200).json({
    message: "sandbox api is healthy",
  });
});

export default app;
