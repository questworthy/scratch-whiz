<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	$: currentURL = $page.url.pathname;

	const links = ['home', 'toolkits', 'about'];

	let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 500);
	});
</script>

<div class="border-b shadow">
	{#if hidden}
		<div
			transition:fly={{ y: -50, duration: 500, easing: backOut }}
			class="w-full flex justify-between items-center"
		>
			<a href="/">
				<img class="h-20" src="/qa.svg" alt="Quest Alliance Logo" />
			</a>
			<div class="flex">
				{#each links as link}
					<a
						href={link === 'home' ? '/' : '/' + link}
						class="{currentURL === '/' && link === 'home'
							? 'bg-[#efead6] font-bold'
							: currentURL.slice(1) === link &&
								'bg-[#efead6] font-bold'} rounded-full px-4 py-2 m-2 text-xl text-stone-900 capitalize transition-all duration-200 ease-in-out"
					>
						{link}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>
