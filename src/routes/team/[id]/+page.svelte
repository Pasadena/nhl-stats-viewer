<script lang="ts">
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<Card>
		<span slot="navigation">
			<BreadCrumbs path={[{ slug: '/', path: '/' }]} />
		</span>
		<span slot="header">
			<h1>{data.team.name} ({data.team.abbreviation})</h1>
		</span>
		<div slot="content">
			<div class="grid grid-cols-2 gap-6 my-8">
				<div>
					<span class="font-bold mr-2">Conference:</span>
					<span>{data.team.conference.name}</span>
				</div>
				<div>
					<span class="font-bold mr-2">Conference:</span>
					<span>{data.team.conference.name}</span>
				</div>
				<div>
					<span class="font-bold mr-2">First year:</span>
					<span>{data.team.firstYearOfPlay}</span>
				</div>
				<div>
					<span class="font-bold mr-2">Venue:</span>
					<span>{data.team.venue.name}, {data.team.venue.city}</span>
				</div>
			</div>
		</div>
	</Card>
</section>
