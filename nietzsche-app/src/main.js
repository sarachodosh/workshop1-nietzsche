import App from './App.svelte';
import * as d3 from 'd3';

d3.csv('./data.csv').then(d => {
	console.log(d)
})

const app = new App({
	target: document.body,
	props: {
		data: data
	}
});

export default app;