<script>
	import Avataar from '$lib/components/Avataar.svelte';

	const style =
		'rounded-2xl px-6 py-4 flex flex-col justify-start drop-shadow-lg hover:scale-110 hover:-translate-y-8 hover:z-10 transition-all duration-200 ease-in-out cursor-pointer';
</script>

<Avataar />

<div class="pt-40 max-w-screen-lg mx-auto flex flex-col justify-center items-center">
	<div class="m-14">
		<h1 class="m- p-4 text-7xl text-gray-800 font-bold">Become a Coding Whiz !</h1>
		<p class="p-4 text-2xl">Drag and drop colorful blocks to build awesome games and apps.</p>
	</div>
	<div class="my-8 flex gap-16 justify-center items-center">
		<div>
			<img
				class="w-96 rounded-3xl shadow-md hover:scale-110 hover:rotate-3 transition-all duration-400 ease-in-out"
				src="/equity.png"
				alt=""
			/>
			<p class="m-8 p-2 text-4xl text-lightAmber text-center bg-slate-800 rounded-xl">
				Gender Equity
			</p>
		</div>

		<div>
			<img
				class="w-96 rounded-3xl shadow-md hover:scale-110 hover:rotate-3 transition-all duration-400 ease-in-out"
				src="/scratch.png"
				alt=""
			/>
			<p class="m-8 p-2 text-4xl text-lightGreen text-center bg-slate-800 rounded-xl">
				Scratch Basics
			</p>
		</div>
	</div>
</div>
