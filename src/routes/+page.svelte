<script>
	import Avataar from '$lib/components/Avataar.svelte';

	export let hidden = false;
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	import { fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let smile = false;
</script>

<div class="prose max-w-none mx-auto mt-60">
	<div class="flex gap-20 justify-center items-center">
		{#if hidden}
			<div class="m-0">
				<h1
					transition:fly={{ y: 50, duration: 500, easing: backOut }}
					class="text-6xl text-[#333333] leading-snug"
				>
					Become a<br />
					<span class="px-6 text-[#333333] bg-lightAmber">Coding Whiz</span> !
				</h1>
				<p transition:fly={{ delay: 600, y: 50, duration: 500, easing: backOut }} class="text-3xl">
					Drag and drop colorful blocks<br /> to build awesome games and apps.
				</p>
				<a
					href="/toolkits"
					on:mouseenter={() => {
						smile = true;
					}}
					on:mouseleave={() => {
						smile = false;
					}}
				>
					<button
						transition:fly={{ delay: 1200, y: 50, duration: 500, easing: backOut }}
						class="rounded-full px-8 py-6 font-bold uppercase bg-lightGreen text-darkGreen text-2xl hover:bg-[#fce2a1] transition-all duration-200 ease-in-out"
						>Explore Toolkits</button
					>
				</a>
			</div>
			<div transition:scale={{ delay: 1800, duration: 500, easing: backOut }} class="h-80 w-80">
				<Avataar {smile} />
			</div>
		{/if}
	</div>
</div>
