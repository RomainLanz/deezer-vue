import { useQuery } from 'vue-query';

export function usePlaylists() {
	const { data: playlists, isLoading } = useQuery(
		'playlists',
		() => fetch('http://localhost:8000/playlists').then((r) => r.json()),
		{
			staleTime: 60 * 1000,
		}
	);

	return { playlists, isLoading };
}
