<script lang="ts">
	export let items: any[] = [];
	export let title: string;
</script>

<div class={$$props.class}>
	<p class="font-bold text-lg my-2">{title}</p>
	<ol class="">
		{#each items as item, index}
			<li class="p-2 odd:bg-indigo-100 rounded-md hover:bg-indigo-300 hover:cursor-pointer">
				<slot {item} {index} />
			</li>
		{/each}
	</ol>
</div>
