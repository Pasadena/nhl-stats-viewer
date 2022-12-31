import type { PageLoad } from '.svelte-kit/types/src/routes/$types';
import type { Team } from 'src/models/Team';

type OutputType = { team: Team };

export const load: PageLoad<OutputType> = async ({ params }) => {
	const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${params.id}`);
	const data = await response.json();
	return {
		team: data.teams[0]
	};
};
