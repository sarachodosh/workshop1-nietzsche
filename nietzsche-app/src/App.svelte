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

	const width = 800;
	const height = 600;

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
	const topicsSVG = 'build/assets/topics.svg';
	const wordsSVG = 'build/assets/words.svg';
	const fragmentExplorer = 'build/assets/fragmentExplorer.svg';
	const experimental = 'build/assets/experimental.svg';

	//Swipe on mouse scroll
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

	const options = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
</script>


<main>
	<Swiper
	direction={'vertical'}
    spaceBetween={30}
    slidesPerView={1}
	mousewheel={true}
	speed={1000}
	autoHeight={true}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  	>
 	
	<SwiperSlide>
		<div class='full-width'>
		<InlineSVG src={introDesktop}/>
		</div>
	</SwiperSlide>

    <SwiperSlide>
		<div class='full-width'>
		<InlineSVG src={topicsSVG}/>
		</div>
	</SwiperSlide>

	<SwiperSlide>
		<div class='full-width'>
		<InlineSVG src={wordsSVG}/>
		</div>
	</SwiperSlide>

    <SwiperSlide>
		<div class='full-width'>
			<InlineSVG src={fragmentExplorer}/>
		</div>
		<div class='fragments-d3'>
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
		</div>
	</SwiperSlide>

    <SwiperSlide>
		<div class='full-width'>
			<InlineSVG src={experimental}/>
		</div>
	</SwiperSlide>

	<SwiperSlide>
		<div class='textSwipe'>
		<h2>What is this?</h2>
		<p>This is a prototype created by students, Rocío Márquez Salguero, Sara Chodosh and Rebecca Pazos during the first workshop for their Masters for Visual Tools with the University of Girona.</p>
		<p>They were assisted by mentors Karma Peiro and Carlo Zapponi as well as an expert on Nietzsche, Joaquin Campodonico.</p>
		<p>The first static prototype was created in <a href="https://www.figma.com/file/XAEL4J1Z6TfVnyARgltc8U/workshop-1-shop-nietz?node-id=111%3A0">Figma</a>, code is hosted on <a href="https://github.com/sarachodosh/workshop1-nietzsche">Github</a> and what you are now seeing are the final efforts of an interactive prototype using D3 and some static SVGs.</p>
		<p>Our goal for the workshop was to:</p>
		<ul>
			<li>Provide a <strong>search & display</strong> function to explore his Posthumous fragments, realised in the third secion called "Fragments Explorer"</li>
			<li>Use keywords curated by Nietzsche expert to show <strong>changing patterns</strong> in Nietzsche's fragments, realised in the first two sections.</li>
			<li>Provide a voting function to <strong>crowdsource sentiment analysis</strong>, realised in the third secion Please see prototype for more.</li>
			<li>An additional search field for users to input their own terms for <strong>exploration</strong>, realised in the fourth section.</li>
		</ul>
		<p>If you would like to know more, please feel free to contact Rebecca Pazos on <a href="https://www.linkedin.com/in/rebeccapazos/">LinkedIn</a>.</p>
		</div>
	</SwiperSlide>
	<div class="swiper-pagination" slot="pagination"></div>
 	<div class="swiper-button-next" slot="button-next"></div>
  	<div class="swiper-button-prev" slot="button-prev"></div>
  </Swiper>

</main>

<style>
	:global(html) {
		background-color: #222222;
	}

	.textSwipe {
		width: 800px;
		margin: 0 auto;
	}

	h1 {
		color:white;
		font-family: 'PlayFair Display', serif;
		font-size: 80px;
		font-weight: 900;
		text-align: left;
		padding: 0 50px;
	}
	
	h2 {
		color:white;
		font-family: 'PlayFair Display', serif;
		font-size: 40px;
		font-weight: 600;
		text-align: left;
	}

	a {
		color: #D22273;
	}

	p, ul {
		color: white;
		opacity: 0.7;
		font-family: 'Open Sans', sans-serif;
		font-size: 20px;
		line-height: 28px;
		text-align: left;
	}

	li {
		line-height: 28px;
	}

	strong {
		opacity: 0.9;
	}

	.full-width {
		width: 100vw;
	}

	.fragments-d3 {
		width: 1000px;
		position: fixed;
		margin: -15vh 0 0 20vw;
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