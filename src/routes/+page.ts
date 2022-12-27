// since there's no dynamic data here, we can prerender

// it so that it gets served as a static asset in production
//export const prerender = true;

export async function load() {
	const data = await (await fetch('https://statsapi.web.nhl.com/api/v1/teams')).json();
	console.log('DATA', data);
	return {
		teams: data.teams
	};
}
