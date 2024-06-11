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

	let bubble = true;

	const questions = [
		{
			text: 'What were the most memorable parts of the story for you?',
			color: '#C9D990'
		},

		{
			text: 'Is there any difference in the way boys and girls are given education in your community? If yes, what do you think is the reason for it?',
			color: '#F682A5'
		},

		{
			text: 'Do you think any one gender between male and female can be better at science, maths, or at using technology? If yes, why do you think so?',
			color: '#C3B2E7'
		},

		{
			text: 'Now look inside, do you think you yourselves have been influenced by gender biases, differences, or stereotypes (we will discuss its meaning in detail soon)? Think of an instance when you stood up for or against such beliefs and share it with your friends!',
			color: '#F9A474'
		}
	];
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
			Step 2
		</p>
		<p class="text-xl">
			That story talked about several things. Here we shall reflect on the concepts you saw.
		</p>

		<div
			class="flex flex-col w-[540px]"
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
		>
			{#each questions as question}
				<div style="background-color: {question.color};" class="m-2 px-4 py-2 rounded-xl bg-red-50">
					<p>{question.text}</p>
				</div>
			{/each}
		</div>

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
