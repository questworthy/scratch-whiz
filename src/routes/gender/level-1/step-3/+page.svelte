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

	let title = 'Step 3️⃣ : Think Again';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
	let expression = false;

	const intro = `


**What is a stereotype?**

Do you remember in Rani’s story how confidently the mother said ‘Strong boys don’t cry’ when Aryan was hurt? Or how Priya casually expressed her thought that maybe subjects like Maths and Science are not meant for girls?

Do you think these statements were made on the basis of any scientific proof OR were they coming purely from societal expectations of how certain things should be?

A stereotype is an over-generalised belief about a particular category of people. It is an expectation that people might have about every person of a particular group.

	`;

	const end = `

If you are completely new to Scratch, a block-based, interactive programming software, you might want to go through these resources first :

- [What is Scratch?](youtube.com)
- [Scratch](youtube.com)
	`;

	const banner = ['🌟 ', 'We ', 'make ', 'the ', 'society ', 'better ', '! ', '🌟'];
</script>

<Guide {title} {expression} {instructions} center={false}>
	<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4">
		<SvelteMarkdown source={intro} />
		<img class="my-8 p-4 rounded-xl bg-white h-60 shadow-md" src="/l1s3.jpg" alt="" />

		<SvelteMarkdown
			source={`
The most common stereotype that affects us most often is the gender stereotype. Gender stereotypes are biased ideas by which males and females are randomly assigned characteristics and roles determined and limited by their gender.

But remember ...

**IT IS IMPORTANT TO EDUCATE OURSELVES ABOUT THESE NOTIONS BECAUSE**

			`}
		/>
		<!-- TODO : replace image with svg -->
		<div class="flex flex-wrap m-0">
			{#each banner as letter}
				<p
					class="hover:text-red-400 cursor-pointer select-none h-20 p-1 text-4xl font-inter fontbold hover:scale-125 hover:-translate-y-8 transition-all duration-200"
				>
					{letter}
				</p>
			{/each}
		</div>
		<a
			href="/gender/level-1/quiz"
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
