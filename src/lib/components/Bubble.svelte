<script>
	export let message = 'Hmm ...';
	import { onMount } from 'svelte';

	let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 2000);
	});

	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
</script>

<div class="p-2 m-2 w-80">
	{#if hidden}
		<p
			class="p-8 rounded-3xl bg-lightGreen text-darkGreen text-xl font-bold"
			transition:scale={{ duration: 500, easing: backOut }}
		>
			{message}
		</p>
	{/if}
</div>
