<script>
	import Avataar from '$lib/components/Avataar.svelte';
	import Bubble from '$lib/components/Bubble.svelte';
	import Photo from '$lib/components/Photo.svelte';

	let message = 'Hmm ...';
</script>

<div class="mt-40 flex flex-col items-center gap-24">
	<div class="flex h-96">
		<Avataar />
		<Bubble {message} />
	</div>
	<div class="w-full bg-[#efead6] p-8">
		<div class="flex justify-center items-center">
			<a
				href="/scratch"
				on:mouseenter={() => {
					message = 'I see you are chosing gender equity.';
				}}
			>
				<Photo src="/equity.png" color="#F9A474" />
			</a>
			<a
				href="/scratch"
				on:mouseenter={() => {
					message = 'I see you are chosing scratch basics.';
				}}
			>
				<Photo src="/scratch.png" color="#C9D990" />
			</a>
		</div>
	</div>
</div>
