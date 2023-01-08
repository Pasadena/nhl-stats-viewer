import type { Player } from '$models/Team';
import type { PageServerData, RequestEvent } from './$types';

type OutputType = Player;

export async function load({ params }: RequestEvent): PageServerData<OutputType> {
	const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${params.id}`);
	const data = await response.json();
	return data.people[0];
}
