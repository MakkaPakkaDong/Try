import Vue from 'vue'
import VueRouter from 'vue-router'

const Discover = () => import('../views/discover/Discover')
const Singer = () => import('../views/singer/Singer')
const Profile = () => import('../views/profile/Profile')
const Village = () => import('../views/village/Village')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/discover'
	},
	{
		path: "/discover",
		component: Discover
	},
	{
		path: "/singer",
		component: Singer
	}
	,
	{
		path: "/profile",
		component: Profile
	}
	,
	{
		path: "/village",
		component: Village
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
	return originalReplace.call(this, location).catch(err => err);
};

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};

export default router
