<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	let smile = false;
</script>

<div class="flex justify-center items-start">
	{#if hidden}
		<div class="my-8 p-8 prose">
			<h1
				transition:fly={{ y: 50, duration: 500, easing: backOut }}
				class="text-[#333333] leading-relaxed"
			>
				🌻 Welcome to the<br />
				<span class="rounded-xl p-2 text-[#333333] bg-lightAmber">Scratch Toolkit !</span>
			</h1>

			<h2 class="font-light" transition:fly={{ delay: 600, y: 50, duration: 500, easing: backOut }}>
				Learn to build games and apps using <a href="https://scratch.mit.edu/">scratch</a>. <br /> Drag
				and drop colorful blocks to build games and bring your imagination to life.
			</h2>

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
					class="rounded-full my-8 p-4 bg-darkViolet text-xl text-bg font-bold shadow-md hover:scale-125 hover:rotate-3 hover:translate-x-2 hover:-translate-y-2 transition-all duration-200 ease-in-out"
				>
					Get Started 🔥
				</button>
			</a>
		</div>
		<div
			transition:scale={{ delay: 1800, duration: 500, easing: backOut }}
			class="w-80 h-80 my-8 p-8"
		>
			<Avataar {smile} />
		</div>
	{/if}
</div>
