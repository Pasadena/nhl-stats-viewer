import type { PageLoad } from '.svelte-kit/types/src/routes/$types';
import type { Team } from 'src/models/Team';

type OutputType = { teams: Team[] };

export const load: PageLoad<OutputType> = async () => {
	const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
	const data = await response.json();
	return Promise.resolve({
		teams: data.teams as Team[]
	});
};
