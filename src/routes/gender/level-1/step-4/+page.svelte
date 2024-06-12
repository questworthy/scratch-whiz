<script>
	import Guide from '$lib/components/Guide.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	let title = 'Step 4️⃣ : Interview';
	let instructions = `
Do you know someone around you who has broken a gender stereotype?
`;
	let expression = false;

	const intro = `
Here is a video about a woman who challenged some stereotypes and rose above them. Meet Ms. Sujata Ramdorai  in the video Sujata Ramdorai and her tale of numbers
	`;

	const end = `

If you are completely new to Scratch, a block-based, interactive programming software, you might want to go through these resources first :

- [What is Scratch?](youtube.com)
- [Scratch](youtube.com)
	`;
</script>

<Guide {title} {expression} {instructions} center={false}>
	<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4">
		<SvelteMarkdown source={intro} />
		{#if online}
			<iframe
				width="560"
				height="315"
				src="https://www.youtube-nocookie.com/embed/--LI0ZRsglg?si=yPJPxYByrlyuhg-n"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{/if}
		<a
			href="/gender/level-1/step-5"
			on:mouseenter={() => {
				expression = true;
			}}
			on:mouseleave={() => {
				expression = false;
			}}
		>
			<button
				class="rounded-full py-4 px-6 my-8 bg-gray-800 text-xl text-bg font-bold shadow-md hover:scale-125 hover:rotate-3 hover:translate-x-2 hover:-translate-y-2 transition-all duration-200 ease-in-out"
			>
				Next 🔥
			</button>
		</a>
	</div>
</Guide>
