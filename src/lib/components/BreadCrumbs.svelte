<script lang="ts">
	type PathFragment = {
		slug: string;
		path: string;
	};
	export let path: PathFragment[] = [];
</script>

<div class="flex justify-center items-center">
	{#each path as fragment}
		<a href={fragment.path} class="mr-3 text-xl">{fragment.slug}</a>
	{/each}
</div>
