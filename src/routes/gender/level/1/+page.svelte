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

	let levels = {
		gender: [
			{ label: 'Gender stereotypes and roles I - School & households' },
			{ label: 'Gender stereotypes and roles II - Career & Access' },
			{ label: 'Know me and around me - Sex and Gender' },
			{ label: 'Gender Identities and Sexualities' },
			{ label: 'What can I do to change?' }
		],
		scratch: [
			{ label: 'Gender stereotypes and roles I - School & households' },
			{ label: 'Gender stereotypes and roles II - Career & Access' },
			{ label: 'Know me and around me - Sex and Gender' },
			{ label: 'Gender Identities and Sexualities' },
			{ label: 'What can I do to change?' }
		]
	};

	let bubble = true;
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
			Step 1
		</p>
		<p class="text-xl">
			Hey learners! Are you excited to take the first step in your journey towards learning about
			gender, equity, and access?
		</p>
		<p class="text-xl">Let us first look at a story (built entirely using the Scratch software).</p>

		<div
			class="flex flex-wrap w-[540px] justify-center"
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
		>
			<iframe
				on:mouseenter|once={() => {
					message =
						'Go on and click the button to explore the scratch project or check out what Scratch is.';
					smile = true;
				}}
				on:mouseleave={() => {
					smile = false;
					bubble = false;
				}}
				allowtransparency="true"
				width="485"
				height="402"
				src="https://scratch.mit.edu/projects/embed/1033696366/"
				frameborder="0"
				allowfullscreen
			></iframe>
		</div>

		<p class="text-xl">
			Note: If you are completely new to Scratch, a block-based, interactive programming software,
			you might want to go through these resources first: What is Scratch? (youtube.com) Scratch!
			(youtube.com)
		</p>

		<a
			href="/gender/level/2"
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
