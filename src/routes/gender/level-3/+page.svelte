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
			Step 3
		</p>
		<p class="text-xl">What is a stereotype?</p>
		<p>
			Do you remember in Rani’s story how confidently the mother said ‘Strong boys don’t cry’ when
			Aryan was hurt? Or how Priya casually expressed her thought that maybe subjects like Maths and
			Science are not meant for girls?
		</p>
		<p>
			Do you think these statements were made on the basis of any scientific proof OR were they
			coming purely from societal expectations of how certain things should be?
		</p>

		<p>
			A stereotype is an over-generalised belief about a particular category of people. It is an
			expectation that people might have about every person of a particular group.
		</p>

		<img src="/l1s3.jpg" alt="" />

		<p>
			The most common stereotype that affects us most often is the gender stereotype. Gender
			stereotypes are biased ideas by which males and females are randomly assigned characteristics
			and roles determined and limited by their gender. But, remember,
			<br /><strong> IT IS IMPORTANT TO EDUCATE OURSELVES ABOUT THESE NOTIONS </strong>
		</p>

		<img src="/l1s3-banner.png" alt="" />

		<div
			class="flex flex-col w-[540px]"
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
		>
			<p class="text-2xl">What is a gender stereotype?</p>
			<Radio bind:group value={1}>A belief that men and women should be treated equally</Radio>
			<Radio bind:group value={2}>
				A belief that certain roles and behaviors are suitable only for men or only for women
				(CORRECT)
			</Radio>
			<Radio bind:group value={3}>A type of music</Radio>

			<Radio bind:group value={4}>A law about gender equality</Radio>
		</div>

		<h2>Check Answer</h2>
		Correct ! Incorrect !

		<a
			href="/gender/level/4"
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
