<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import Bubble from '$lib/components/Bubble.svelte';

	let smile = false;

	let message =
		'Welcome to the "Gender Equity" toolkit ! Select a level to continue your journey !';
	let color = '#C9D990';
	let text = '#1C471F';

	export let hidden = false;
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 400);
		message = 'Hi there!';
	});

	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Radio from '$lib/components/Radio.svelte';

	let bubble = true;

	let group = 1;
</script>

<div class="flex absolute left-0 bottom-0">
	<div class="w-60">
		<Avataar {smile} />
	</div>
	{#if bubble}
		<Bubble {message} {color} {text} />
	{/if}
</div>

<div class="prose mx-auto mt-40 flex flex-col justify-start items-start">
	{#if hidden}
		<p
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
			class="text-5xl text-stone-400 font-bold"
		>
			Step 4
		</p>
		<p class="text-xl">What is a stereotype?</p>
		<p>
			Here is a video about a woman who challenged some stereotypes and rose above them. Meet Ms.
			Sujata Ramdorai in the video Sujata Ramdorai and her tale of numbers
		</p>

		<a
			href="/gender/level/3"
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
				>Next</button
			>
		</a>
	{/if}
</div>
