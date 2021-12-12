<script lang="ts" setup>
	import { useQueryProvider } from 'vue-query';

	useQueryProvider();
</script>

<template>
	<div class="container">
		<main>
			<RouterView />
		</main>
		<aside></aside>
		<footer></footer>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-areas: 'main aside' 'footer footer';
		grid-template-columns: 1fr 300px;
		grid-template-rows: 1fr 100px;
		height: 100%;
	}

	main {
		grid-area: main;
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
