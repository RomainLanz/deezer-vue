import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import got from 'got';

const app = fastify();
app.register(fastifyCors, {
	origin: true,
});

app.get('/playlists', async (request, reply) => {
	const response = await got('https://api.deezer.com/chart/0/playlists?limit=20');
	reply.send(response.body);
});

app.listen(8000);
