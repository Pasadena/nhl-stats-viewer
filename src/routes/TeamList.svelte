<script lang="ts">
	import TeamCard from './TeamCard.svelte';

	export let teams: any[] = [];
</script>

<div class="grid grid-cols-3 md:grid-cols-5 gap-4">
	{#each teams as team}
		<TeamCard {team} />
	{/each}
</div>
