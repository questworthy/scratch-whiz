<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Guide from '$lib/components/Guide.svelte';

	let hidden = false;
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	const levels = [
		`level 1 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 2 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 3 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 4 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 5 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`
	];

	let title = '🏆 Level Up !';
	let instructions = levels[0];
	let expression = false;
</script>

<Guide {title} {expression} {instructions}>
	<div class="mx-auto max-w-screen-md">
		<div
			class="mx-auto flex flex-wrap justify-center items-center"
			transition:fly={{ y: 100, duration: 400, easing: backOut }}
		>
			{#each levels as level, index}
				<a
					on:mouseenter={() => {
						instructions = level;
						expression = true;
					}}
					on:mouseleave={() => {
						instructions = `... hmmm`;
						expression = false;
					}}
					href={'/gender/level/' + (index + 1)}
					class="m-4 p-4 flex flex-col gap-4 border-[#F7DED0] border-4 rounded-xl hover:bg-[#F7DED0] transition-all duration-200 text-center"
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
	</div>
</Guide>
