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

	let title = 'Step 2️⃣ : Think';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
	let expression = false;

	const intro = `

That story talked about several things. Here we shall reflect on the concepts you saw.

1. What were the most memorable parts of the story for you?
2. Is there any difference in the way boys and girls are given education in your community? If yes, what do you think is the reason for it?
3. Do you think any one gender between male and female can be better at science, math, or at using technology? If yes, why do you think so?
4. Now look inside, do you think you yourselves have been influenced by gender biases, differences, or stereotypes (we will discuss its meaning in detail soon)? Think of an instance when you stood up for or against such beliefs and share it with your friends!

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
		<a
			href="/gender/level-1/step-3"
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
