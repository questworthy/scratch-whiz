<script>
	import { page } from '$app/stores';

	$: currentURL = $page.url.pathname;

	const links = ['home', 'gender', 'about'];
</script>

<div class="absolute w-screen h-32 bg-white drop-shadow-md flex justify-between items-center">
	<img class="h-32" src="/qa.svg" alt="Quest Alliance Logo" />
	<div class="mx-8 flex">
		{#each links as link}
			<a
				href={link === 'home' ? '/' : '/' + link}
				class="{currentURL === '/' && link === 'home'
					? 'text-[#f79420]'
					: currentURL.slice(1) === link &&
						'text-[#f79420]'} p-4 m-4 text-2xl text-[#0075bb] hover:text-[#f79420] font-bold transition-all duration-200 ease-in-out"
			>
				{link}
			</a>
		{/each}
	</div>
</div>
