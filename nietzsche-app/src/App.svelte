<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
    // import Rect-bar from './components/Rect-bar.svelte'

	export let data;
	// console.log(data)
	const testData = data[6]
	// console.log(testData)
	
	const pink = '#E12179';
	const yellow = '#BB9F06';
	const blue = '#087F8C';
	const ltgrey = '#8F8F8F'
	const dkgrey = '#414142'

	heightScale = d3.scaleLinear()
				.domain[d3.extent(data, d => d['length'])]
				.range([height, 0])

</script>
<!-- <Rect-bar /> -->


<main>
	<svg viewBox='0 0 500 500'>
		{#if data}			
		{#each data as d}
			<rect width='15' height={d['length']/1000} fill={dkgrey} transform='translate({d.index*16}, 0)'/>
			{#each d.schop_matches.matched_positions as e}
				<rect width='15' height='1' transform='translate({d.index*16}, {e/1000})' fill={pink}/>
			{/each}
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