<script lang="ts" setup>
	import { defineProps, toRaw } from 'vue';
	import { storeToRefs } from 'pinia';
	import { usePlayerStore } from '../store';

	const props = defineProps({
		track: {
			type: Object,
			required: true,
		},
	});

	const store = usePlayerStore();
	const { tracksToPlay } = storeToRefs(store);
	function play() {
		store.playTrack(toRaw(props.track));
	}

	function queue() {
		store.queueTrack(toRaw(props.track));
	}
</script>

<template>
	<div class="track">
		<img :src="track.album.cover_small" />
		<div>
			<h3>{{ track.title }}</h3>
			<p>{{ track.artist.name }}</p>

			<div class="track__actions">
				<button @click="play">Play</button>
				<button @click="queue" :disabled="tracksToPlay.has(track)">Queue</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
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
