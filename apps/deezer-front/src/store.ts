import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
	state: () => ({
		currentTrack: null,
	}),

	actions: {
		playTrack(track: any) {
			this.currentTrack = track;
		},
	},
});
