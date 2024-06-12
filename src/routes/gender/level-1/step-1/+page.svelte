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

	let title = 'Step 1️⃣ : Story Time';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
	let expression = false;

	const intro = `

Are you excited to take the first step in your journey towards learning about gender, equity, and access?
Let us first look at a story (built entirely using the Scratch software).
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
				title="scratch project"
				role="presentation"
				on:mouseenter|once={() => {
					instructions =
						'Go on and click the button to explore the scratch project or check out what Scratch is.';
					expression = true;
				}}
				on:mouseleave={() => {
					instructions =
						'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
					expression = false;
				}}
				width="485"
				height="402"
				src="https://scratch.mit.edu/projects/embed/1033696366/"
				frameborder="0"
				allowfullscreen
			></iframe>
			<SvelteMarkdown source={end} />
		{:else}
			<SvelteMarkdown source={`Looks like you're offline. Open this file in scratch program.`} />
		{/if}
		<a
			href="/gender/level-1/step-2"
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
