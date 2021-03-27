<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
    // import Rect-bar from './components/Rect-bar.svelte'

	export let data;
	console.log(data)
	const testData = data[6]
	// console.log(testData)
	
	// var i;
	// function lineHandler(a) {
	// 	for (i = 0; i < a.length; i++) {
	// 		// return a[i]*122.926;
	// 		console.log(a)
	// 	}
	// }

</script>
<!-- <Rect-bar /> -->


<main>
	<svg viewBox='0 0 500 500'>
		{#if testData}			
		{#each data as d}
			<rect width='20' height={d.length/1000} fill='black' transform='translate({d.index}, 0)'/>
			<!-- {#each data.schop_matches as e, i}
				<rect width='20' height='1' transform='translate(0, {e.frac_schop[i]}'/>
			{/each} -->
		{/each}
		{/if}
	</svg>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>