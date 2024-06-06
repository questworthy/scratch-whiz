<script>
	import { page } from '$app/stores';

	$: currentURL = $page.url.pathname;

	const links = ['home', 'toolkits', 'about'];

	import { onMount } from 'svelte';

	let hidden = false;
	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 500);
	});

	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
</script>

<div class="h-32">
	{#if hidden}
		<div
			transition:fly={{ y: -50, duration: 500, easing: backOut }}
			class=" w-full flex justify-between items-center"
		>
			<a href="/">
				<img class="h-32" src="/qa.svg" alt="Quest Alliance Logo" />
			</a>
			<div class="m-4 flex">
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
	{/if}
</div>
