import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to) => {
	const publicPages = [
		"/login",
		"/signup",
		"/forgot-password",
		"/",
		"/about",
		"/conditions",
	];

	if (publicPages.includes(to.path)) {
		return;
	}

	const token = useCookie("token");
	if (!token.value) {
		return navigateTo("/login");
	}
});
