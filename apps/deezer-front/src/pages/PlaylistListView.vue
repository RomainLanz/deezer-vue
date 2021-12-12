<script lang="ts" setup>
	import { ref, onMounted } from 'vue';

	const playlists = ref([]);
	onMounted(async () => {
		const response = await fetch('http://localhost:8000/playlists').then((r) => r.json());
		playlists.value = response.data;
	});
</script>

<template>
	<p v-if="playlists.length <= 0">Loading...</p>
	<ul>
		<li v-for="playlist in playlists">
			<RouterLink :to="`/playlists/${playlist.id}`">{{ playlist.title }}</RouterLink>
		</li>
	</ul>
</template>
