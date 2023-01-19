import type { Player } from '$models/Team';
import type { PageServerData, RequestEvent } from './$types';

type OutputType = { player: Player; stats: unknown };

export async function load({ params }: RequestEvent): PageServerData<OutputType> {
	const [player, stats] = await Promise.all([
		fetch(`https://statsapi.web.nhl.com/api/v1/people/${params.id}`).then((res) => res.json()),
		fetch(
			`https://statsapi.web.nhl.com/api/v1/people/${params.id}/stats?stats=statsSingleSeason`
		).then((res) => res.json())
	]);
	return {
		player: player.people[0],
		stats
	};
}
