<script lang="ts">
	export let label: string;
</script>

<div class="flex items-center gap-2">
	<p class="font-bold text-lg">{label}</p>
	<p><slot /></p>
</div>
