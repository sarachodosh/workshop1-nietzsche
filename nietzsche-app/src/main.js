import App from './App.svelte';
//import * as d3 from 'd3';

fetch('https://raw.githubusercontent.com/sarachodosh/workshop1-nietzsche/main/data-scraping/data_jsonified.json')
.then((res) => res.json())
.then((json) => {
	const data = json;

	const app = new App({
		target: document.body,
		props: {
			data: data
		}
	});
})



export default app;