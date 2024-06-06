<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import Bubble from '$lib/components/Bubble.svelte';
	import Photo from '$lib/components/Photo.svelte';

	let smile = false;

	let message = 'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
	let color = '#C9D990';
	let text = '#1C471F';
</script>

<div class="mt-40 flex flex-col items-center gap-24">
	<div class="flex h-96">
		<Avataar {smile} />
		<Bubble {message} {color} {text} />
	</div>
	<div class="w-full bg-[#efead6] p-8">
		<div class="flex justify-center items-center">
			<a
				href="/gender"
				on:mouseenter={() => {
					message =
						'Explore gender equity with Scratch! Discover why treating everyone fairly is super important!';
					smile = true;
				}}
				on:mouseleave={() => {
					message = 'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
					smile = false;
				}}
			>
				<Photo src="/equity.png" color="#F9A474" label="Gender Equity" />
			</a>
			<a
				href="/scratch"
				on:mouseenter={() => {
					message =
						"Don't know scratch ? No problemo. Let's dive in and start from the basics. We'll learn together!";
					smile = true;
				}}
				on:mouseleave={() => {
					message = 'Welcome to the toolkits page. Below,  we have two journeys designed for you.';
					smile = false;
				}}
			>
				<Photo src="/scratch.png" color="#C9D990" label="Scratch Basics" />
			</a>
		</div>
	</div>
</div>
