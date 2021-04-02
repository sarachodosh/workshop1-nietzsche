<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;600;900&display=swaps");
		/* @import url("components/swiper/swiper.scss"); */
)
    </style>
</svelte:head>

<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
    // import Rect-bar from './components/Rect-bar.svelte'

	export let data;
	// console.log(data)
	const testData = data[6]
	// console.log(testData)
	
	const pink = '#D22273';
	const yellow = '#BB9F06';
	const blue = '#769892';
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
	
	// SVG Import
	import InlineSVG from 'svelte-inline-svg';
	const introDesktop = 'build/assets/bg-header-all.svg';

	//Trying swipe on mouse scroll
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
</script>



<div class="intro">	
	<div class="bgbubbles">
		<InlineSVG src={introDesktop}/>
	</div>
</div>

<main>
	<Swiper
	direction={'vertical'}
    spaceBetween={30}
    slidesPerView={1}
	mousewheel={true}
	autoHeight={true}
	navigation
	pagination={{ el: '.swiper-pagination', clickable: true }}
	scrollbar={{ draggable: true }}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  	>
 	
	<SwiperSlide>
		 <h1>Hello, I am section 1</h1>
	</SwiperSlide>

    <SwiperSlide>
		<h1>Hello, I am section 2</h1>
	</SwiperSlide>

    <SwiperSlide>
		<h1>I am section 3 and I have the D3 box</h1>
		<svg viewBox='0 0 {width} {height}'>
			{#if data}			
			{#each data as d}
				<rect width={barWidth} height={heightScale(d.total_length)} fill={dkgrey} 
					transform='translate({d.index*(barWidth+padding)}, {d.row*maxHeight})'/>
				<!-- PEOPLE -->
				{#each d.schop_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
				{/each}
				{#each d.wagn_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
				{/each}
				{#each d.kant_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
				{/each}
	
				<!-- GENERAL -->
				{#each d.deutch_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={ltgrey}/>
				{/each}
				{#each d.musik_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={ltgrey}/>
				{/each}
	
				<!-- PHILOSOPHY -->
				{#each d.wille_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
				{/each}
				{#each d.ding_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
				{/each}
				{#each d.wahr_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
				{/each}
				{#each d.tragische_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
				{/each}
				{#each d.leiden_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
				{/each}
	
				<!-- RELIGION -->
				{#each d.hindu_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={yellow}/>
				{/each}
				{#each d.budd_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={yellow}/>
				{/each}
				{#each d.schleier_matches.matched_positions as e}
					<rect width={barWidth} height='1' 
					transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={yellow}/>
				{/each}
			{/each}
			{/if}
		</svg>
	</SwiperSlide>

    <SwiperSlide>
		<h1>Slide 4</h1>

	</SwiperSlide>
  </Swiper>

</main>

<style>
	:global(html) {
		background-color: #222222;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		color:white;
	}

	h1 {
		color:white;
		font-family: 'PlayFair Display', serif;
		font-size: 80px;
		font-weight: 900;
		text-align: left;
		padding: 0 50px;
	}


	Swiper {
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
        }

	SwiperSlide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }

	@media (min-width: 640px) {
		main {
			max-width: 1200px;
		}
	}
</style>