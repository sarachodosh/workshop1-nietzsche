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
	const dkgrey = '#333'

	const width = 1200;
	const height = 550;

	

	let heightScale = d3.scaleLinear()
				.domain([d3.min(data, d => d.total_length), d3.max(data, d => d.total_length)])
				.range([8, height/6]);
	
	let widthScale = d3.scaleBand()
				.domain(d3.range(0,29))
				.range([0, width-padding]);

	
	// RECT HEIGHT AND WIDTH			
	const maxHeight = heightScale(d3.max(data, d => d.total_length));
	const barWidth = 30 //widthScale.bandwidth();
	const padding = 10;
	
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
import { run_all } from 'svelte/internal';
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
    slidesPerView={0.5}
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
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
					{/each}
					{#each d.wagn_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
					{/each}
					{#each d.kant_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={pink}/>
					{/each}
		
					<!-- GENERAL -->
					{#each d.deutch_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={ltgrey}/>
					{/each}
					{#each d.musik_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={ltgrey}/>
					{/each}
		
					<!-- PHILOSOPHY -->
					{#each d.wille_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
					{/each}
					{#each d.ding_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
					{/each}
					{#each d.wahr_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
					{/each}
					{#each d.tragische_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
					{/each}
					{#each d.leiden_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={blue}/>
					{/each}
		
					<!-- RELIGION -->
					{#each d.hindu_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={yellow}/>
					{/each}
					{#each d.budd_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
						transform='translate({d.index*(barWidth+padding)}, {heightScale(e) + d.row*maxHeight})' fill={yellow}/>
					{/each}
					{#each d.schleier_matches.matched_positions as e}
						<rect width={barWidth} height='0.5' 
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
		<p>This is a prototype created by students, <a href="https://www.linkedin.com/in/romarquez/">Rocío Márquez Salguero</a>, <a href="https://www.linkedin.com/in/sara-chodosh-0551778b/">Sara Chodosh</a>, and <a href="https://www.linkedin.com/in/rebeccapazos/">Rebecca Pazos</a> during the first workshop for their <a href="http://www.mastervisualtoolsudg.com/">Masters in Visual Tools to Empower Citizens</a> with the University of Girona.</p>
		<p>They were assisted by mentors <a href="https://www.karmapeiro.com/en/landing-en/">Karma Peiró</a> and <a href="https://www.makinguse.com/">Carlo Zapponi</a> as well as an expert on Nietzsche, <a href="https://www.linkedin.com/in/joaqu%C3%ADn-campod%C3%B3nico-g%C3%B3mez-215527195">Joaquín Campodónico.</a></p>
		<p>The first static prototype was created in <a href="https://www.figma.com/file/XAEL4J1Z6TfVnyARgltc8U/workshop-0.5-shop-nietz?node-id=111%3A0">Figma</a>, code is hosted on <a href="https://github.com/sarachodosh/workshop1-nietzsche">Github</a> and what you are now seeing are the final efforts of an interactive prototype using D3 and some static SVGs.</p>
		<p>Our goal for the workshop was to:</p>
		<ul>
			<li>Provide a <strong>search & display</strong> function to explore his Posthumous fragments, realised in the third secion called "Fragments Explorer"</li>
			<li>Use keywords curated by Nietzsche expert to show <strong>changing patterns</strong> in Nietzsche's fragments, realised in the first two sections.</li>
			<li>Provide a voting function to <strong>crowdsource sentiment analysis</strong>, realised in the third secion Please see prototype for more.</li>
			<li>An additional search field for users to input their own terms for <strong>exploration</strong>, realised in the fourth section.</li>
		</ul>
		<h2>Ok, but why did we do this? Keep scrolling...</h2>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class='textSwipe'>
		<h2>So, why? Because we wanted to visualise philosophy.</h2>
		<p>The original idea was to apply data visualisation to philosophical texts so that we can create alternative ways to engage with philosophical concepts. The focus is on a known narrative in the philosophical sphere, that of the philosopher Nietzsche and his relationship with Schopenhauer. Much of Nietzsche’s concepts are influenced by his admiration, and later disapproval of Schopenhauer.</p>
		<p>It remains a mystery how this happened so we wanted to visualize the terms associated with Shopenhauer’s name. Originally, we had wanted to apply sentiment analysis but realised that we should 'spark' debate, not impose, as is inline with philosophy in general.</p>
		<p>Also, we had trouble with natural language processing techniques and need to learn more!</p>
		<h2>Finally, a bit about the data...</h2>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class='textSwipe'>
		<h2>It is Nietzche's point-of-view, after all.</h2>
		<p>The data is taken from <a href="http://www.nietzschesource.org/#eKGWB/NF-1869,1">Nietzsche Source</a>. More details about the particular edition we are using can be found <a href="http://doc.nietzschesource.org/en/eKGWB">here</a>. Nietzsche Source supports a fully open access policy. All content is published under Creative Commons General Public License "Attribution, Non-Commercial, NoDerivatives".</p>
		<p>We chose to do our analysis in German in order to avoid anything being lost in translation. Later, we will add English translation by approved authorities who are experts on Nietzsche and understand the intricacies of his use of words.</p>
		<p>Regarding bias, as this is purely based on Nietzsche and his thoughts, it comes with his inherent bias and historical bias. We think we are able to address this by framing our analysis from his 'point-of-view'.</p>
		<p>This is a sample experiement of how philosophical texts can be visualised in order to encourage others to uplift more diverse voices in philoshopy for future projects.</p>
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
		color: white;
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
		font-weight: 600;
	}

	p, ul {
		color: white;
		opacity: 0.8;
		font-family: 'Open Sans', sans-serif;
		font-size: 22px;
		line-height: 28px;
		text-align: left;
	}

	li {
		line-height: 28px;
	}

	strong {
		opacity: 1.2;
	}

	.full-width {
		width: 100vw;
	}

	.fragments-d3 {
		width: 1200px;
		position: fixed;
		margin: -20vh 0 0 20vw;
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