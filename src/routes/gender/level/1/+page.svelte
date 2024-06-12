<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Guide from '$lib/components/Guide.svelte';

	let online = false;

	let hidden = false;
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	let title = 'Step 1️⃣';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
	let expression = false;

	const content = `
Hey learners! Are you excited to take the first step in your journey towards learning about gender, equity, and access?

Let us first look at a story (built entirely using the Scratch software).
	`;
</script>

<Guide {title} {expression} {instructions}>
	<div class="mx-auto max-w-screen-md flex flex-col justify-center items-center prose">
		<SvelteMarkdown source={instructions} />
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
	</div>
</Guide>
