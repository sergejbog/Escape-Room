<script>
	import morse from 'morse-keyframes';

	let secretKeyframes = morse('gbrrgbrrgbrgbrrrbrrg', 5, 0, 1);
	console.log(secretKeyframes);

	

	let inputValue = '';
	let isItCorrect = false;
	let incorrectGuess = false;
	

	function doInput() {
		if (inputValue.trim().toLowerCase() === 'eggnog') {
			incorrectGuess = false;
			isItCorrect = true;
		}
		else {
      incorrectGuess = true;
    }
	inputValue = "";
	}
</script>

<div class="main">
	<div class="text-center mb-2">
		<a class="text-white hint" href="/blinker/hint">Hint</a>
	</div>
	
	<div class="bigger-box">
		<div class="secret shadow-lg" />
	</div>
	
	<form>
		<input placeholder="Guess" class="text-center" bind:value={inputValue} on:change={doInput} type="text" />
	</form>
	{#if isItCorrect}
		<div class="m-auto mt-5 text-center">
			<a href="/19" class="text-white underline">Next -></a>
		</div>
	{/if}
	{#if incorrectGuess}
    <div class="m-auto mt-5 text-center">
      <p class="text-yellow-500">Incorrect guess</p>
    </div>
  {/if}
</div>

<style>
	.secret {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 30px;
		width: 100px;
		background: #311d8f;
		animation: 30s linear infinite morse;
		border-radius: 10px;
	}

	.hint::before {
		content: 'i';
		display: inline-block;
		font-size: 0.8em;
		font-weight: 900;
		width: 1em;
		height: 1em;
		padding: 0.2em;
		line-height: 1;
		border: 1.5px solid white;
		border-radius: 50%;
		text-align: center;
		margin: 0 0.5em 0 0;
		position: relative;
		top: -0.05em;
	}
	form {
		display: flex;
		justify-content: center;
	}

	.bigger-box {
		margin: 0 auto;
		margin-bottom: 30px;
		height: 250px;
		width: 250px;
		background: #f3f3f3;
		border-radius: 4px;
		position: relative;
		border: 5px solid black;
	}

	.main {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 30px;
		width: 80vw;
	}

	/* .main::before {
		background-color: #ccc;
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		opacity: 0.3;
		border-radius: 10px;
	}	 */

	input {
		width: 80%;
		height: 50px;
		border-radius: 4px;
		padding: 0 20px;
		font-size: 30px;
		letter-spacing: 10px;
		border: 1px solid black;
	}

	@keyframes morse {
		0.00% {opacity: 0;}
		0.00% {opacity: 0;}
5.00% {opacity: 0;}
6.05% {opacity: 1;}
7.35% {opacity: 0;}
8.66% {opacity: 0;}
9.71% {opacity: 0;}
10.58% {opacity: 0;}
11.45% {opacity: 0;}
12.50% {opacity: 1;}
15.11% {opacity: 1;}
17.72% {opacity: 0;}
18.77% {opacity: 1;}
21.39% {opacity: 1;}
24.00% {opacity: 0;}
25.05% {opacity: 1;}
26.35% {opacity: 0;}
27.66% {opacity: 0;}
28.71% {opacity: 0;}
29.58% {opacity: 0;}
30.45% {opacity: 0;}
31.50% {opacity: 1;}
34.11% {opacity: 1;}
36.72% {opacity: 0;}
37.77% {opacity: 1;}
40.39% {opacity: 1;}
43.00% {opacity: 0;}
44.05% {opacity: 1;}
45.35% {opacity: 0;}
46.66% {opacity: 0;}
47.71% {opacity: 0;}
48.58% {opacity: 0;}
49.45% {opacity: 0;}
50.50% {opacity: 1;}
53.11% {opacity: 1;}
55.72% {opacity: 0;}
56.77% {opacity: 1;}
58.08% {opacity: 0;}
59.39% {opacity: 0;}
60.43% {opacity: 0;}
61.30% {opacity: 0;}
62.17% {opacity: 0;}
63.22% {opacity: 1;}
65.83% {opacity: 1;}
68.45% {opacity: 0;}
69.50% {opacity: 1;}
72.11% {opacity: 1;}
74.72% {opacity: 0;}
75.77% {opacity: 1;}
78.39% {opacity: 1;}
81.00% {opacity: 0;}
82.05% {opacity: 0;}
82.92% {opacity: 0;}
83.79% {opacity: 0;}
84.83% {opacity: 1;}
87.45% {opacity: 1;}
90.06% {opacity: 0;}
91.11% {opacity: 1;}
93.72% {opacity: 1;}
96.34% {opacity: 0;}
97.39% {opacity: 1;}
98.69% {opacity: 0;}
100.00% {opacity: 0;}
	}
</style>
