const express = require("express");
const cors = require("cors");
const connectDB = require("./databse/db");
const { generalLimiter } = require("./middleware/rateLimiter");
const wordRoutes = require("./routes/words");
const searchRoutes = require("./routes/search");

const PORT = 3000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(generalLimiter);

app.use("/", wordRoutes);
app.use("/api", searchRoutes);

const server = app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

server.keepAliveTimeout = 0;

function shutdown(signal) {
  server.closeAllConnections();
  server.close(() => {
    if (signal === "SIGUSR2") process.kill(process.pid, "SIGUSR2");
    else process.exit(0);
  });
}

process.once("SIGUSR2", () => shutdown("SIGUSR2"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
