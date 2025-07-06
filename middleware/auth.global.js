import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to) => {
	// Pages qui ne nécessitent pas d'authentification
	const publicPages = [
		"/login",
		"/signup",
		"/forgot-password",
		"/",
		"/about",
		"/conditions",
	];

	// Si la page actuelle est publique, on laisse passer
	if (publicPages.includes(to.path)) {
		return;
	}

	const token = useCookie("token");
	if (!token.value) {
		return navigateTo("/login");
	}
});
