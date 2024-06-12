<script>
	import Guide from '$lib/components/Guide.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);
	});

	let title = '💡 Quiz Time !';
	let instructions = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;
	let expression = false;

	const intro = `
Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
	`;

	const questions = [
		{
			index: 1,
			label: 'What is a gender stereotype?',
			options: [
				{
					label: 'A belief that men and women should be treated equally.',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label:
						'A belief that certain roles and behaviors are suitable only for men or only for women.',
					value: 2,
					nudge: 'nudge` 2'
				},
				{ label: 'A type of music', value: 3, nudge: 'nudge 3' },
				{ label: 'A law about gender equality', value: 4, nudge: 'nudge 4' }
			],
			correct: 2,
			color: '#DBA979'
		},
		{
			index: 2,
			label: 'Which of these is not a gender stereotype?',
			options: [
				{
					label: 'Boys are better at sports than girls.',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'Girls are better at cooking than boys.',
					value: 2,
					nudge: 'nudge` 2'
				},
				{ label: 'Both boys and girls can become doctors.', value: 3, nudge: 'nudge 3' },
				{ label: 'Only men should be engineers.', value: 4, nudge: 'nudge 4' }
			],
			correct: 3,
			color: '#DBA979'
		},
		{
			index: 3,
			label: 'What can schools do to reduce gender stereotypes?',
			options: [
				{
					label: 'Separate boys and girls in all activities.',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'Encourage all students to explore a variety of subjects and careers.',
					value: 2,
					nudge: 'nudge` 2'
				},
				{ label: 'Promote only traditional gender roles.', value: 3, nudge: 'nudge 3' },
				{ label: 'Teach boys and girls different subjects.', value: 4, nudge: 'nudge 4' }
			],
			correct: 2,
			color: '#DBA979'
		}
	];
</script>

<Guide {title} {expression} {instructions} center={false}>
	<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4">
		<SvelteMarkdown source={intro} />
		{#each questions as question}
			<Mcq {question} />
		{/each}

		<a
			href="/gender/level-1/step-4"
			on:mouseenter={() => {
				expression = true;
			}}
			on:mouseleave={() => {
				expression = false;
			}}
		>
			<button
				class="rounded-full py-4 px-6 my-4 bg-gray-800 text-xl text-bg font-bold shadow-md hover:scale-125 hover:rotate-3 hover:translate-x-2 hover:-translate-y-2 transition-all duration-200 ease-in-out"
			>
				Next 🔥
			</button>
		</a>
	</div>
</Guide>
