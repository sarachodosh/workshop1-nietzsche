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

	const width = 1000;
	const height = 800;

	const padding = 5;

	let heightScale = d3.scaleLinear()
				.domain([d3.min(data, d => d.total_length), d3.max(data, d => d.total_length)])
				.range([5, height/9 - padding]);
	
	let widthScale = d3.scaleBand()
				.domain(d3.range(0,19))
				.range([0, width-padding]);

	// console.log(d3.range(0,19))
	
	const maxHeight = heightScale(d3.max(data, d => d.total_length));
	const barWidth = widthScale.bandwidth();
	console.log(barWidth)
	

</script>
<!-- <Rect-bar /> -->


<main>
	<svg viewBox='0 0 {width} {height}'>
		{#if data}			
		{#each data as d}
			<rect width={barWidth} height={heightScale(d.total_length)} fill={dkgrey} 
				transform='translate({d.index*(barWidth+padding)}, {d.row*maxHeight})'/>
			{#each d.schop_matches.matched_positions as e}
				<rect width={barWidth} height='1' 
				transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
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

	@media (min-width: 640px) {
		main {
			max-width: 1200px;
		}
	}
</style>