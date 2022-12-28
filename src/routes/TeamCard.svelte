<script lang="ts">
	import type { Team } from 'src/models/Team';

	export let team: Team;
</script>

<div
	class="flex flex-col justify-center align-center p-6 bg-white rounded-lg shadow-md h-28 hover:scale-110 hover:cursor-pointer transition"
>
	{team.name}
</div>
