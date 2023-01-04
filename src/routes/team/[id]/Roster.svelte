<script lang="ts">
	import List from '$lib/components/List/List.svelte';
	import type { Team, RosterMember } from '$models/Team';

	export let team: Team;

	const isForward = (member: RosterMember) => 'Forward' === member.position.type;
	const isDefenceman = (member: RosterMember) => 'Defenseman' === member.position.type;
	const isGoalie = (member: RosterMember) => 'Goalie' === member.position.type;
	const sortByName = (members: RosterMember[]) =>
		members.sort((first: RosterMember, second: RosterMember) => {
			const secondLastName = second.person.fullName.split(' ')[1];
			const firstLastName = first.person.fullName.split(' ')[1];
			if (firstLastName < secondLastName) {
				return -1;
			}
			if (firstLastName > secondLastName) {
				return 1;
			}
			return 0;
		});
</script>

<div>
	{#await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}?expand=team.roster`).then( (res) => res.json() )}
		<!-- promise is pending -->
		<p>Loading roster...</p>
	{:then value}
		{@const roster = value.teams[0].roster}
		<!-- promise was fulfilled -->
		<List items={sortByName(roster.roster.filter(isForward))} let:item title="Forwards">
			<span class="mr-4">{item.person.fullName},</span>
			<span>{item.position.abbreviation}</span>
		</List>
		<List
			items={sortByName(roster.roster.filter(isDefenceman))}
			let:item
			title="Defensemen"
			class="my-8"
		>
			<span class="mr-4">{item.person.fullName},</span>
			<span>{item.position.abbreviation}</span>
		</List>
		<List items={sortByName(roster.roster.filter(isGoalie))} let:item title="Goalies">
			<span class="mr-4">{item.person.fullName},</span>
			<span>{item.position.abbreviation}</span>
		</List>
	{:catch error}
		<!-- promise was rejected -->
		<p>Something went wrong: {error.message}</p>
	{/await}
</div>
