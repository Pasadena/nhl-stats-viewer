<script lang="ts">
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import Card from '$lib/components/Card.svelte';
	import LabeledValue from '$lib/components/LabeledValue.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { player, stats } = data ?? {};

	console.log('DATA', data);
</script>

<section>
	<Card>
		<span slot="navigation">
			<BreadCrumbs
				path={[{ slug: `/${player.currentTeam.name}`, path: `/team/${player.currentTeam.id}` }]}
			/>
		</span>
		<span slot="header">
			<h1>{player.fullName}</h1>
		</span>
		<div slot="content">
			<h2 class="text-xl font-bold">Basic info:</h2>
			<div class="grid grid-cols-3 gap-4 my-8">
				<LabeledValue label="Birth date:">
					{`${player.birthDate} (${player.currentAge} years)`}
				</LabeledValue>
				<LabeledValue label="Place of date:">
					{player.birthCity}
				</LabeledValue>
				<LabeledValue label="Nationality:">
					{player.nationality}
				</LabeledValue>

				<LabeledValue label="Height:">
					{player.height}
				</LabeledValue>
				<LabeledValue label="Weight:">
					{player.weight} lb
				</LabeledValue>
				<LabeledValue label="Number:">
					{player.primaryNumber}
				</LabeledValue>
			</div>
			<h2 class="text-xl font-bold">Stats:</h2>
			{JSON.stringify(stats)}
		</div>
	</Card>
</section>
