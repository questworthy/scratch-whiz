<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import Bubble from '$lib/components/Bubble.svelte';
	import Photo from '$lib/components/Photo.svelte';

	let smile = false;

	let message = 'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
	let color = '#C9D990';
	let text = '#1C471F';

	export let hidden = false;
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 400);
	});

	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
</script>

<div class="mt-40 flex flex-col items-center gap-24">
	<div class="flex h-96">
		<Avataar {smile} />
		<Bubble {message} {color} {text} />
	</div>
	<div class="w-full h-96 bg-[#efead6]">
		{#if hidden}
			<div
				transition:fly={{ y: 100, duration: 400, easing: backOut }}
				class="h-96 flex justify-center"
			>
				<a
					href="/gender"
					class="m-16"
					on:mouseenter={() => {
						message =
							'Explore gender equity with Scratch! Discover why treating everyone fairly is super important!';
						smile = true;
					}}
					on:mouseleave={() => {
						message =
							'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
						smile = false;
					}}
				>
					<Photo src="/equity.png" color="#F9A474" label="Gender Equity" />
				</a>
				<a
					href="/scratch"
					class="m-16"
					on:mouseenter={() => {
						message =
							"Don't know scratch ? No problemo. Let's dive in and start from the basics. We'll learn together!";
						smile = true;
					}}
					on:mouseleave={() => {
						message =
							'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
						smile = false;
					}}
				>
					<Photo src="/scratch.png" color="#C9D990" label="Scratch Basics" />
				</a>
			</div>
		{/if}
	</div>
</div>
