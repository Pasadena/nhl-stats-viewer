<script lang="ts">
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import Card from '$lib/components/Card.svelte';
	import LabeledValue from '$lib/components/LabeledValue.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<Card>
		<span slot="navigation">
			<BreadCrumbs
				path={[{ slug: `/${data.currentTeam.name}`, path: `/team/${data.currentTeam.id}` }]}
			/>
		</span>
		<span slot="header">
			<h1>{data.fullName}</h1>
		</span>
		<div slot="content">
			<h2 class="text-xl font-bold">Basic info:</h2>
			<div class="grid grid-cols-3 gap-4 my-8">
				<LabeledValue label="Birth date:">
					{`${data.birthDate} (${data.currentAge} years)`}
				</LabeledValue>
				<LabeledValue label="Place of date:">
					{data.birthCity}
				</LabeledValue>
				<LabeledValue label="Nationality:">
					{data.nationality}
				</LabeledValue>

				<LabeledValue label="Height:">
					{data.height}
				</LabeledValue>
				<LabeledValue label="Weight:">
					{data.weight} lb
				</LabeledValue>
				<LabeledValue label="Number:">
					{data.primaryNumber}
				</LabeledValue>
			</div>
			{JSON.stringify(data)}
		</div>
	</Card>
</section>
