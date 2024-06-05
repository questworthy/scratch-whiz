<script>
	$: innerHeight = 0;
	$: innerWidth = 0;

	let cursor = { x: 0, y: 0 };

	function mapNumRange(num, inMin, inMax, outMin, outMax) {
		return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}

	$: skewY = mapNumRange(cursor.y, innerHeight, 0, 0.9, 1.0);
	$: skewX = mapNumRange(cursor.x, innerWidth, 0, 0.8, 0.9);

	let smile = false;
</script>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:pointermove={(e) => {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
	}}
/>

<p>{cursor.x}</p>
<p>{cursor.y}</p>

<button class="w-80 h-96 absolute left-0 bottom-0">
	<svg
		role="img"
		width="100%"
		height="100%"
		viewBox="0 0 946.88281 1686.9088"
		version="1.1"
		id="svg1"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		on:mouseenter={() => {
			smile = true;
		}}
		on:mouseleave={() => {
			smile = false;
		}}
		><defs id="defs1" /><path
			id="path93"
			style="fill:#333333;fill-opacity:1;stroke:none;stroke-width:4.79502;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="M 472.4395,0 C 347.1406,3.0000774e-4 226.9737,50.22409 138.3741,139.62271 49.7746,229.02134 -9.999985e-5,350.27175 0,476.70031 v 690.50989 h 77.0371 l 0.1055,-0.8568 9.334,-75.5779 9.0234,76.4347 h 109.1875 l 2.7344,-31.2353 9.1719,-104.7367 8.8652,105.924 2.5156,30.048 h 565.332 l 7.7325,-141.8601 8.9023,-163.31299 8.6074,165.16319 7.2969,140.0099 h 121.0371 l -2,-690.50989 C 944.8829,350.27109 895.1077,229.02009 806.5073,139.62136 717.9069,50.22262 597.7391,-7.1999226e-4 472.4395,0 Z"
		/><path
			id="path116"
			style="fill:#c3b2e7;fill-opacity:1;stroke:none;stroke-width:5.03162;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m 458.015,1072.3544 a 353.16716,152.62879 0 0 0 -353.1668,152.6291 v 309.2968 A 353.16716,152.62879 0 0 0 458.015,1686.9088 353.16716,152.62879 0 0 0 811.1827,1534.2803 V 1224.9835 A 353.16716,152.62879 0 0 0 458.015,1072.3544 Z"
		/><path
			id="path110"
			style="fill:#ede3d1;fill-opacity:1;stroke:none;stroke-width:3.98051;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m 348.07956,166.96911 -10.52305,115.25251 -5.88079,64.40364 A 515.08213,380.86954 2.7155199 0 0 203.9673,389.90883 l -6.97167,152.72457 a 65.739713,62.118363 3.0445862 0 0 -0.46658,-0.0333 65.739713,62.118363 3.0445862 0 0 -68.50157,59.0039 65.739713,62.118363 3.0445862 0 0 62.83624,65.10341 65.739713,62.118363 3.0445862 0 0 0.46844,-0.007 l -3.72843,81.67673 a 289.71884,265.45912 2.9013817 0 0 152.31181,245.82138 l -8.77704,192.27398 a 126.35604,222.34085 2.5916357 0 0 116.07984,227.9733 126.35604,222.34085 2.5916357 0 0 136.3598,-216.246 l 8.77705,-192.274 A 289.71884,265.45912 2.9013817 0 0 766.41582,775.26623 l 3.22243,-70.5921 a 65.739713,62.118363 3.0445862 0 0 15.65209,2.67784 65.739713,62.118363 3.0445862 0 0 68.50165,-59.00583 65.739713,62.118363 3.0445862 0 0 -62.83624,-65.10341 65.739713,62.118363 3.0445862 0 0 -15.8298,1.21531 l 8.23895,-180.48637 a 515.08213,380.86954 2.7155199 0 0 -275.03352,-73.12861 515.08213,380.86954 2.7155199 0 0 -156.0003,11.77407 l -1.73179,-71.53442 z"
		/><g
			id="g116"
			transform="matrix(0.98010302,0.04553176,-0.04513432,0.98873356,1201.8241,601.41046)"
			><g id="g122"
				><ellipse
					style="fill:#2b343b;fill-opacity:1;stroke:none;stroke-width:8.00753;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
					id="path111-12"
					cx="-582.32819"
					cy="31.611568"
					rx="71.346886"
					ry="71.994446"
				/><ellipse
					style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.09708;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
					id="path111-12-6"
					cx="-254.67986"
					cy="564.08411"
					rx="27.562769"
					ry="27.877968"
					transform="matrix(0.34918108,{skewY},-{skewX},0.48972606,0,0)"
				/></g
			><g id="g121"
				><ellipse
					style="fill:#2b343b;fill-opacity:1;stroke:none;stroke-width:8.00753;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
					id="path111"
					cx="-895.54449"
					cy="31.611568"
					rx="71.346886"
					ry="71.994446"
				/><ellipse
					style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.32788;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
					id="path111-12-6-1"
					cx="-434.271"
					cy="872.55328"
					rx="30.221882"
					ry="29.355612"
					transform="matrix(0.32998536,{skewY},-{skewX},0.51371496,0,0)"
				/></g
			><ellipse
				style="fill:#f9a474;fill-opacity:1;stroke:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				id="path111-1"
				cx="-959.77936"
				cy="225.98767"
				rx="36.540554"
				ry="54.807766"
			/><ellipse
				style="fill:#f9a474;fill-opacity:1;stroke:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				id="path111-1-4"
				cx="-518.82574"
				cy="225.98767"
				rx="36.540554"
				ry="54.807766"
			/><path
				style="fill:none;fill-opacity:1;stroke:#e0d5c1;stroke-width:5;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				d="m -698.4725,138.81746 c -14.5277,21.71752 -35.87,11.599 -53.756,10.7125"
				id="path112"
			/><path
				style="fill:none;fill-opacity:1;stroke:#696969;stroke-width:10;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				d="m -787.2471,241.91319 c 33.9761,24.0532 70.2188,19.505 107.8724,-2.8479"
				id="path113"
			/><path
				style="fill:none;fill-opacity:1;stroke:#696969;stroke-width:10;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				d="m -930.7421,-68.50892 c 24.1728,-10.60645 47.253,-23.38081 85.8854,-5.29772"
				id="path114"
			/><path
				style="fill:none;fill-opacity:1;stroke:#696969;stroke-width:10;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
				d="m -625.2709,-70.7068 c 23.0295,-13.815 48.2046,-23.01271 85.8854,-5.29772"
				id="path114-8"
			/></g
		><path
			id="path115-1"
			style="fill:none;fill-opacity:1;stroke:#f682a5;stroke-width:20.8566;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m 643.00661,435.95197 c -80.13845,-3.72211 -153.05927,60.75588 -156.84611,143.70779 -3.78644,82.95193 62.99501,152.96583 143.13339,156.68956 80.13909,3.72314 137.06641,-61.61659 140.85328,-144.56921 3.78647,-82.95264 -47.00145,-152.10539 -127.14056,-155.82814 z M 338.85127,421.94402 c -82.10413,-3.81385 -151.72955,60.28596 -155.51244,143.17077 -3.78315,82.88405 59.7076,153.16674 141.81091,156.98132 82.10345,3.81387 157.22683,-59.5523 161.01076,-142.43635 3.78427,-82.88479 -65.20513,-153.90117 -147.30923,-157.71574 z"
		/><path
			style="fill:#efceb9;fill-opacity:1;stroke:none;stroke-width:19.709;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
			d="m 339.91544,994.19828 c 66.71791,28.46832 131.81897,51.41702 252.43975,11.72732 l -3.19239,69.934 c -72.26497,11.2481 -120.53208,45.3482 -252.31791,-14.3964 z"
			id="path115"
		/><g
			id="g142"
			transform="translate(-1665.7312,-49.839807)"
			style="display:{smile ? 'block' : 'none'}"
			><path
				d="m 2207.7344,808.28711 c -31.0714,-1.46732 -110.3273,33.60637 -171.4883,30.42187 8.247,22.70187 21.5951,41.23563 37.6309,54.00196 a 64.272118,57.229179 0 0 1 53.4082,-25.75 64.272118,57.229179 0 0 1 52.0839,23.72656 c 14.8076,-13.10553 28.2125,-32.56754 38.7344,-59.41016 6.5682,-16.24676 1.7893,-22.41606 -10.3691,-22.99023 z"
				style="fill:#333333;stroke-width:0.1;stroke-linecap:round"
				id="path138"
			/><path
				d="m 2179.3691,890.6875 a 64.272118,57.229179 0 0 0 -52.0839,-23.72656 64.272118,57.229179 0 0 0 -53.4082,25.75 c 30.9215,24.61721 71.8378,27.76255 105.4921,-2.02344 z"
				style="fill:#f87171;stroke-width:0.0910979;stroke-linecap:round"
				id="path140"
			/></g
		></svg
	>
</button>
