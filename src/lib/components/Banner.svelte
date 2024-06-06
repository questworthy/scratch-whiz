<script>
	export let src = '';
	export let alt = '[ Enter image description here.]';
	export let firstLine = '[ First line ]';
	export let secondLine = '[ Second line ]';
	export let description = '[ Introductary Para ]';
	export let color = '#c3b2e7';
	export let text = '#52225E';
</script>

<div
	style="background-color: {color};"
	class="h-screen max-w-screen-sm flex flex-col justify-center items-center"
>
	<img class="m-8 p-4" {src} {alt} />
	<div class="p-4 text-darkViolet">
		<h1 style="color:{text}" class="m-4 p-4 text-6xl font-bold">{firstLine}<br />{secondLine}</h1>
		<p style="color:{text}" class="m-4 p-4 text-3xl">{description}</p>
	</div>
</div>
