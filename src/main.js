import App from './App.svelte';
import answer from 'the-answer';

const app = new App({
	target: document.body
});

console.log('the answer ' + answer)
export default app;