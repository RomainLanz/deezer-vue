<script lang="ts" setup></script>

<template>
	<p>Hello World</p>
</template>

<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html,
	body {
		height: 100%;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		isolation: isolate;
	}
</style>
