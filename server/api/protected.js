import auth from "../middleware/auth.js";

export default defineEventHandler(async (event) => {
	await auth(event);
	return {
		message: "Accès autorisé au contenu protégé",
		user: event.context.user,
	};
});
