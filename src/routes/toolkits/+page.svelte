<script>
	import Guide from '$lib/components/Guide.svelte';
	import { onMount } from 'svelte';

	export let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 400);
	});

	let toolkits = [
		{
			label: '🏳️‍🌈 Gender Equity',
			src: '/equity.png',
			alt: 'Three children from different backgrounds talking and laughing.',
			color: '#5B2715',
			bgColor: '#fadfb5',
			href: '/gender',
			instructions: `Gender Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`
		},
		{
			label: '📔 Scratch Basics',
			src: '/scratch.png',
			alt: 'Two kids playing & learning together.',
			color: '#1C471F',
			bgColor: '#f3fadc',
			href: '/scratch',
			instructions: `Scratch Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`
		}
	];

	let title = '🧭 Choose Your Adventure';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
</script>

<Guide {title} {instructions}>
	<div class="m-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-16">
		{#each toolkits as toolkit}
			<a href={toolkit.href}>
				<div
					role="presentation"
					on:mouseenter={() => {
						instructions = toolkit.instructions;
					}}
					on:mouseleave={() => {
						instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
					}}
					style="background-color:{toolkit.bgColor};"
					class="rounded-2xl px-2 flex flex-col justify-start drop-shadow-lg hover:-translate-y-3 hover:z-10 transition-all duration-200 ease-in-out cursor-pointer hover:rotate-2 hover:scale-110"
				>
					<img class="m-0" src={toolkit.src} alt={toolkit.alt} />
				</div>
				<p style="color:{toolkit.color};" class="p-2 m-2 text-center text-2xl font-bold">
					{toolkit.label}
				</p>
			</a>
		{/each}
	</div>
</Guide>
