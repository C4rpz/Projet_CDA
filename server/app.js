import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import usersRoute from "./routes/usersRoute.js";
import animalsRoute from "./routes/animalsRoute.js";
import cartsRoute from "./routes/cartsRoute.js";
import cartsItemsRoute from "./routes/cartsItemsRoute.js";
import categoriesRoute from "./routes/categoriesRoute.js";

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
     credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/animals", animalsRoute);
app.use("/api/v1/carts", cartsRoute);
app.use("/api/v1/cartsItems", cartsItemsRoute);
app.use("/api/v1/categories", categoriesRoute);

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Un utilisateur est connecté au chat");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Utilisateur déconnecté");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Serveur backend et chat sur http://localhost:${PORT}`);
});
