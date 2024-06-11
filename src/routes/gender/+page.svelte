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
		message = 'Welcome to the "Gender Equity" toolkit ! Select a level to continue your journey !';
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
</script>

<div class="flex absolute left-0 bottom-0">
	<Avataar {smile} />
	<Bubble {message} {color} {text} />
</div>

<div class="mt-40 flex flex-col justify-center items-center">
	{#if hidden}
		<p
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
			class="m-4 p-4 text-5xl text-center text-stone-400 font-bold"
		>
			Level Up !
		</p>
		<div
			class="flex flex-wrap w-[540px] justify-center"
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
		>
			{#each levels.gender as level, index}
				<a
					on:mouseenter={() => {
						message = level.label;
						smile = true;
					}}
					on:mouseleave={() => {
						message =
							'Welcome to the "Gender Equity" toolkit ! Select a level to continue your journey !';
						smile = false;
					}}
					href={'/gender/level/' + (index + 1)}
					class="m-4 p-8 flex flex-col gap-4 border-[#F7DED0] border-4 rounded-xl hover:bg-[#F7DED0] transition-all duration-200 text-center"
				>
					<p class="text-6xl text-darkAmber">
						{index + 1}
					</p>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="0"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-star fill-amber-400"
							><polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/></svg
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="0"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-star fill-slate-400"
							><polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/></svg
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="0"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-star fill-slate-400"
							><polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/></svg
						>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
