<script>
	import { onMount } from 'svelte';
	import { backIn, backOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	export let message = 'Hmm ...';
	export let color = '#C9D990';
	export let text = '#1C471F';
	export let hidden = false;

	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 2000);
	});
</script>

{#if hidden}
	<div class="prose" in:fly={{ x: -50, y: 50, duration: 400, easing: backOut }}>
		{#key message}
			<p
				in:fly={{ x: -50, y: 50, duration: 200, delay: 300, easing: backOut }}
				out:fly={{ x: 50, y: -50, duration: 200, easing: backOut }}
			>
				{message}
			</p>
		{/key}
	</div>
{/if}
