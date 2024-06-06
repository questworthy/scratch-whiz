<script>
	import Avataar from '$lib/components/Avataar.svelte';

	const style =
		'rounded-2xl px-6 py-4 flex flex-col justify-start drop-shadow-lg hover:scale-110 hover:-translate-y-8 hover:z-10 transition-all duration-200 ease-in-out cursor-pointer';
</script>

<div class="wscreen mx-auto w-96">
	<Avataar bubble={true} message="Are you ready to unlock a world of games, animations ?" />
</div>

<div
	class="mt-24 shadow-inner w-screen bg-red-200 mx-auto flex flex-col justify-center items-center"
>
	<h1 class=" text-6xl my-16 text-darkAmber opacity-40 font-bold leading-snug">
		Choose Your Adventure
	</h1>

	<div class="my-8 flex justify-center items-center">
		<div class="m-8">
			<img
				class="w-96 rounded-3xl shadow-md hover:scale-110 hover:rotate-3 transition-all duration-400 ease-in-out"
				src="/equity.png"
				alt=""
			/>
			<p class="m-8 p-2 text-4xl text-darkAmber text-center bg-lightAmber rounded-xl">
				Gender Equity
			</p>
		</div>

		<div class="m-8">
			<img
				class="w-96 rounded-3xl shadow-md hover:scale-110 hover:rotate-3 transition-all duration-400 ease-in-out"
				src="/scratch.png"
				alt=""
			/>
			<p class="m-8 p-2 text-4xl text-darkGreen text-center bg-lightGreen rounded-xl">
				Scratch Basics
			</p>
		</div>
	</div>
</div>
