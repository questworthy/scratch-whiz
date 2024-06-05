<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
	import '@fontsource/comic-neue'; // 400

	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.9
		}
	);

	let size = spring(30);
</script>

<svelte:window
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(50)}
	on:mouseup={() => size.set(30)}
/>

<svg class="absolute opacity-40 -z-50" role="presentation" height="100%" width="100%">
	<circle
		class="fill-sky-400 active:fill-red-400 transition-colors duration-100 delay-100"
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
	/>
</svg>

<Nav />
<slot />
