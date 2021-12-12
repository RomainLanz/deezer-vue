<script lang="ts" setup>
	import { useQueryProvider } from 'vue-query';
	import Player from './components/Player.vue';
	import QueueTrack from './components/QueueTrack.vue';

	useQueryProvider();
</script>

<template>
	<div class="container">
		<main>
			<RouterView />
		</main>
		<aside>
			<QueueTrack />
		</aside>
		<footer>
			<Player />
		</footer>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-areas: 'main aside' 'footer footer';
		grid-template-columns: 1fr 300px;
		grid-template-rows: 1fr 100px;
		height: 100vh;
		max-height: 100vh;
	}

	main {
		grid-area: main;
		max-height: 100%;
	}

	aside {
		border-left: 1px solid var(--darker-grey);
		grid-area: aside;
	}

	footer {
		border-top: 1px solid var(--darker-grey);
		grid-area: footer;
	}
</style>
