import { defineStore, acceptHMRUpdate } from 'pinia';

export const usePlayerStore = defineStore('player', {
	state: () => ({
		currentTrack: null,
		tracksToPlay: new Set(),
	}),

	actions: {
		playTrack(track: any) {
			this.currentTrack = track;
		},
		queueTrack(track: any) {
			this.tracksToPlay.add(track);
		},
		removeTrack(track: any) {
			this.tracksToPlay.delete(track);
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot));
}
