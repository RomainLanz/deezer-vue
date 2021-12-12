<script lang="ts" setup>
	import { useRoute } from 'vue-router';
	import { usePlaylist } from '../hooks';

	const route = useRoute();
	const { playlist, isLoading } = usePlaylist(+route.params.id);
</script>

<template>
	<RouterLink to="/">Back to Playlist</RouterLink>

	<p v-if="isLoading">Loading...</p>

	<article v-else>
		<h1>{{ playlist.title }}</h1>

		<section class="tracks">
			<div class="track" v-for="track in playlist.tracks.data">
				<img :src="track.album.cover_small" />
				<div class="track-info">
					<h3>{{ track.title }}</h3>
					<p>{{ track.artist.name }}</p>
				</div>
			</div>
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

	.track {
		align-items: center;
		border-top: 1px solid var(--darker-grey);
		display: flex;
		gap: 4px;
		padding-block: 8px;

		h3 {
			font-size: 1.1rem;
			font-weight: 400;
		}

		p {
			font-size: 0.8rem;
		}

		img {
			height: 50px;
			width: 50px;
		}
	}
</style>
