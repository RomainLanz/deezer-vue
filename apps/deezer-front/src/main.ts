import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import Application from './Application.vue';

const router = createRouter({
	routes: [
		{ path: '/', component: () => import('./pages/PlaylistListView.vue') },
		{ path: '/playlists/:id', component: () => import('./pages/PlaylistView.vue') },
	],
	history: createWebHistory(import.meta.env.BASE_URL),
});

const application = createApp(Application);
application.use(createPinia());
application.use(router);
application.mount('#app');
