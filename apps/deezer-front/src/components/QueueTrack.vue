<script lang="ts" setup>
	import { toRaw } from 'vue';
	import { storeToRefs } from 'pinia';
	import { usePlayerStore } from '../store';

	const store = usePlayerStore();
	const { tracksToPlay } = storeToRefs(store);

	function play(track: any) {
		store.playTrack(toRaw(track));
		store.removeTrack(toRaw(track));
	}

	function remove(track: any) {
		store.removeTrack(toRaw(track));
	}
</script>

<template>
	<p>{{ tracksToPlay.size }} track{{ tracksToPlay.size > 1 ? 's' : '' }} queued</p>
	<section class="tracks">
		<div class="track" v-for="track in tracksToPlay" :key="track.id">
			<img :src="track.album.cover_small" />
			<div>
				<h3>{{ track.title }}</h3>
				<p>{{ track.artist.name }}</p>

				<div class="track__actions">
					<button @click="play(track)">Play</button>
					<button @click="remove(track)">Remove</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	p {
		margin: 4px;
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

		& > div {
			flex-grow: 1;
		}

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

	.track__actions {
		display: flex;
		gap: 4px;
		justify-content: flex-end;
	}
</style>
