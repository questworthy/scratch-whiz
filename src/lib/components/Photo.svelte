<script>
	export let src = '/equity.png';
	export let alt = '';
	export let color = '#333';
	export let label = 'Caption';
</script>

<div class="relative">
	<div class="absolute w-16 -top-4 -right-4">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 27.120582 21.56621"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="layer1" transform="translate(-67.246476,-63.322305)">
				<path
					id="rect2-5"
					style="opacity:0.4;fill:{color};stroke-width:1.7144;stroke-linecap:round"
					d="m 72.578515,63.703268 c 7.238086,4.511443 14.093245,9.481436 20.78486,14.647256 1.251861,0.966412 1.363927,3.020228 0.159604,4.729196 -1.204323,1.708968 -3.14796,2.248559 -4.507341,1.440363 -7.042151,-4.186785 -14.015,-8.796942 -20.78486,-14.647255 -1.196591,-1.034059 -1.363921,-3.020224 -0.159598,-4.729193 1.204323,-1.708967 3.165205,-2.276905 4.507335,-1.440367 z"
				/>
			</g>
		</svg>
	</div>

	<img class="w-96 hover:shadow-xl transition-all duration-200" {src} {alt} />

	<div class="absolute w-16 -left-4 -bottom-4">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 27.120582 21.56621"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="layer1" transform="translate(-67.246476,-63.322305)">
				<path
					id="rect2-5"
					style="opacity:0.4;fill:{color};stroke-width:1.7144;stroke-linecap:round"
					d="m 72.578515,63.703268 c 7.238086,4.511443 14.093245,9.481436 20.78486,14.647256 1.251861,0.966412 1.363927,3.020228 0.159604,4.729196 -1.204323,1.708968 -3.14796,2.248559 -4.507341,1.440363 -7.042151,-4.186785 -14.015,-8.796942 -20.78486,-14.647255 -1.196591,-1.034059 -1.363921,-3.020224 -0.159598,-4.729193 1.204323,-1.708967 3.165205,-2.276905 4.507335,-1.440367 z"
				/>
			</g>
		</svg>
	</div>
</div>
{#if label != ''}
	<p class="m-4 p-4 text-3xl text-center text-stone-400 font-bold">{label}</p>
{/if}
