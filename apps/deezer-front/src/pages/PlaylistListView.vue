<script lang="ts" setup>
	import { usePlaylists } from '../hooks';

	const { playlists, isLoading } = usePlaylists();
</script>

<template>
	<p v-if="isLoading">Loading...</p>
	<ul v-else>
		<li v-for="playlist in playlists.data">
			<RouterLink :to="`/playlists/${playlist.id}`">{{ playlist.title }}</RouterLink>
		</li>
	</ul>
</template>
