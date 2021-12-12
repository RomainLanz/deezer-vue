<script lang="ts" setup>
	import { useRoute } from 'vue-router';
	import { usePlaylist } from '../hooks';
	import Track from '../components/Track.vue';

	const route = useRoute();
	const { playlist, isLoading } = usePlaylist(+route.params.id);
</script>

<template>
	<p v-if="isLoading">Loading...</p>

	<article v-else>
		<RouterLink to="/">Back to Playlist</RouterLink>

		<h1>{{ playlist.title }}</h1>

		<section class="tracks">
			<Track v-for="track in playlist.tracks.data" :key="track.id" :track="track" />
		</section>
	</article>
</template>

<style lang="scss" scoped>
	article {
		position: relative;
		height: 100%;
		max-height: calc(100vh - 100px);
		overflow-y: hidden;
	}

	.tracks {
		display: flex;
		flex-direction: column;
		padding-inline: 8px;
		height: 100%;
		overflow-y: auto;
	}

	.tracks > .track:first-child {
		border-top: 0;
	}
</style>
