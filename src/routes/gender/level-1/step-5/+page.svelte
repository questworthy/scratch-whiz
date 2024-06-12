<script>
	import Guide from '$lib/components/Guide.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';

	let hidden = false;

	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	let title = 'Step 5 : Build';
	let instructions = `
Do you know someone around you who has broken a gender stereotype?
`;
	let expression = false;

	const intro = `
There is no limit to what ONE INDIVIDUAL can do to become an agent of change. 
You can use what resources you have to spread awareness and positivity around you about the issue of gender stereotypes. 

The Scratch software is one fun and smart way to build for a cause. 
You can create your own project or remix any existing projects available on the internet, including the one that you just saw in step 1.

So, “Stop not till the goal is reached” Wink wink
Well that was Swami Vivekanada but it could be you too!

Go on Imagine, Program, Share with Scratch.
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
		<button
			class="p-2 my-8 rounded-xl shadow border active:translate-y-2 active:scale-95 transition-all duration-200"
			>Create your own scratch project.</button
		>
		<button
			class="p-2 my-8 rounded-xl shadow border active:translate-y-2 active:scale-95 transition-all duration-200"
			>Remix the project used earlier in this level.</button
		>
	</div>
</Guide>
