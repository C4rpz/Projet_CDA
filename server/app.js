import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

import usersRoute from "./routes/usersRoute.js";
import animalsRoute from "./routes/animalsRoute.js";
import cartsRoute from "./routes/cartsRoute.js";
import cartsItemsRoute from "./routes/cartsItemsRoute.js";
import categoriesRoute from "./routes/categoriesRoute.js";

const app = express();
const server = http.createServer(app);

const corsOptions = {
	origin: (origin, cb) => {
		// origin === undefined si requête Postman / curl => autoriser
		const whitelist = ["http://localhost:3000", process.env.FRONT_URL];
		if (!origin || whitelist.includes(origin)) return cb(null, true);
		cb(new Error("Not allowed by CORS"));
	},
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(cookieParser());
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
