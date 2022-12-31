<script lang="ts">
	import type { Team } from 'src/models/Team';

	export let team: Team;
</script>

<div
	class="flex flex-col justify-center items-center bg-white rounded-lg shadow-md h-28 hover:scale-110 hover:cursor-pointer transition"
>
	<a href={`team/${team.id}`} class="p-6 ">
		{team.name}
	</a>
</div>
