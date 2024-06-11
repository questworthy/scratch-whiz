<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let title = 'Page Name'; // SUGGESTION: use emojis ...
	export let expression = false; // TODO: add jolly, sad & confused.
	export let instructions = `

Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.

Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
`;

	export let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});
</script>

{#if hidden}
	<div class="flex">
		<div class="overflow-y-scroll h-screen z-50 w-80 border-r shadow">
			<div class="p-4 m-4 h-60">
				<Avataar smile={expression} />
			</div>

			<div class="p-4 m-4 prose font-inter">
				<h2 class="text-neutral-800">Instructions</h2>
				{#key instructions}
					<p
						in:fly={{ x: -50, y: 50, duration: 200, delay: 300, easing: backOut }}
						out:fly={{ x: 50, y: -50, duration: 200, easing: backOut }}
						class="m-0 p-0 text-neutral-600"
					>
						<SvelteMarkdown source={instructions} />
					</p>
				{/key}
			</div>
		</div>

		<div class="mx-auto max-w-screen-md">
			<h1
				class="m-4 p-4 text-4xl text-center text-stone-400 font-bold"
				transition:fly={{ y: 100, duration: 400, easing: backOut }}
			>
				{title}
			</h1>

			<slot />
		</div>
	</div>
{/if}
