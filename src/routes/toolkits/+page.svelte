<script>
	import { onMount } from 'svelte';

	export let hidden = false;

	let message =
		'Welcome to the "Gender Equity" toolkit ! Select a level to continue your journey !';
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 400);
		message = 'Welcome to the "Gender Equity" toolkit ! Select a level to continue your journey !';
	});

	let toolkits = [
		{
			label: '🏳️‍🌈 Gender Equity',
			src: '/equity.png',
			alt: 'Three children from different backgrounds talking and laughing.',
			color: '#5B2715',
			bgColor: '#fadfb5',
			href: '/gender'
		},
		{
			label: '📔 Scratch Basics',
			src: '/scratch.png',
			alt: 'Two kids playing & learning together.',
			color: '#1C471F',
			bgColor: '#f3fadc',
			href: '/scratch'
		}
	];
</script>

<h1 class="m-4 p-4 text-4xl text-center text-stone-400 font-bold">🧭 Choose Your Adventure</h1>
<div class="p-4 w-screen bg-[#efead6] shadow-inner">
	<div class="m-4 p-4 mx-auto max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each toolkits as toolkit}
			<a href={toolkit.href}>
				<div
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
</div>
