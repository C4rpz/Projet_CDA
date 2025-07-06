import {
	getHeader,
	getCookie,
	createError,
	defineEventHandler,
	sendRedirect,
} from "h3";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "votre_secret_ultra_long";

export default defineEventHandler(async (event) => {
	// Routes publiques qui ne nécessitent pas d'authentification
	const publicRoutes = [
		"/login",
		"/signup",
		"/api/v1/users/login",
		"/api/v1/users/register",
		"/api/v1/categories",
		"/api/v1/animals",
	];

	if (publicRoutes.some((route) => event.node.req.url?.startsWith(route))) {
		return;
	}

	// Récupération du token depuis le header Authorization ou le cookie
	const authHeader = getHeader(event, "Authorization");
	const cookieToken = getCookie(event, "token"); // Utilise le cookie 'token' au lieu de 'authjs.session-token'

	const token = authHeader ? authHeader.replace("Bearer ", "") : cookieToken;

	// console.log("Auth Header:", authHeader);
	// console.log("Cookie Token:", cookieToken);
	// console.log("Token final:", token);

	if (!token) {
		// console.log("Aucun token trouvé");
		return sendRedirect(event, "/login");
	}

	try {
		const user = jwt.verify(token, SECRET);
		// console.log("Utilisateur décodé:", user);
		event.context.user = user;
	} catch (err) {
		console.error("Erreur de vérification du token:", err);
		throw createError({ statusCode: 403, statusMessage: "Forbidden" });
	}
});
