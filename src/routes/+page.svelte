<script>
	import Avataar from '$lib/components/Avataar.svelte';
</script>

<div class="prose max-w-none mx-auto mt-60">
	<div class="flex gap-20 justify-center items-center">
		<div class="m-0">
			<h1 class="text-6xl text-[#333333] leading-snug">
				Become a<br />
				<span class="px-6 text-[#333333] bg-lightAmber">Coding Whiz</span> !
			</h1>
			<p class="text-3xl">Drag and drop colorful blocks<br /> to build awesome games and apps.</p>
			<a href="/toolkits">
				<button
					class="rounded-full px-8 py-6 font-bold uppercase bg-lightGreen text-darkGreen text-2xl hover:bg-[#fce2a1] transition-all duration-200 ease-in-out"
					>Explore Toolkits</button
				>
			</a>
		</div>
		<div class="h-80 w-80">
			<Avataar />
		</div>
	</div>
</div>
