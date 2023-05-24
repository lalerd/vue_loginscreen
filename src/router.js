import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/components/LoginPage"
import WelcomeItem from "@/components/WelcomeItem"


Vue.use(VueRouter);

const routes = [
	{ path: "/", component: LoginPage },
	{ path: "/WelcomeItem", component: WelcomeItem },
	
];

export const router = new VueRouter({
	mode: "history",
	routes
});