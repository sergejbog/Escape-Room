<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="fixed top-10 w-11/12">
	<h1 class="text-white text-[50px] mb-2">Welcome</h1>

	<h2 class="text-white mb-2 font-bold">Goal:</h2>
	<p class="text-white">- You need to find the final page which will lead to the next location.</p>
	<br>
	<h2 class="text-white mb-2 font-bold">Rules:</h2>
	<ul>
		<li class="text-white">- Take a second phone or have a pen and paper nearby, you will need to write down some stuff</li>
		<li class="text-white">- Try to remember on what page you are (ex. url.tk/abc), so you can go back to the puzzle, if for whatever reason your site/browser closes.</li>
	</ul>
	<br>
	<h2 class="text-white mb-2 font-bold">Tips:</h2>
	<ul>
		<li class="text-white">- Most of the answers will be holiday themed.</li>
		<li class="text-white">- If something bad happens, try to refresh the page.</li>
	</ul>
	
	<br>
	<a href="/wordle" class="text-white font-bold underline">START</a>

	
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Baloo+Chettan+2&family=Calligraffitti&display=swap');
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	a {
		color: white;
	}
</style>
