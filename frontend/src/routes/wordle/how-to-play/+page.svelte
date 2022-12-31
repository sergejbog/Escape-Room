<svelte:head>
	<title>How to play Wordle</title>
	<meta name="description" content="How to play Wordle" />
</svelte:head>

<div class="text-column">
	<h1 class="text-white">How to play Wordle</h1>

	<p class="text-white">To play, enter a five-letter English word. For example:</p>

	<div class="example">
		<span class="close">j</span>
		<span class="missing">o</span>
		<span class="close">l</span>
		<span class="missing">l</span>
		<span class="exact">y</span>
	</div>

	<p class="text-white">
		The <span class="exact">y</span> is in the right place. <span class="close">r</span> and
		<span class="close">t</span>
		are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
		Let's make another guess:
	</p>

	<div class="example">
		<span class="exact">m</span>
		<span class="exact">e</span>
		<span class="exact">r</span>
		<span class="exact">r</span>
		<span class="exact">y</span>
	</div>

	<p class="text-white">
		This time we guessed right! You have <strong>six</strong> guesses to get the word.
	</p>
</div>

<style>
	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8em;
		width: 2.4em;
		height: 2.4em;
		background-color: white;
		box-sizing: border-box;
		border-radius: 2px;
		border-width: 2px;
		color: rgba(0, 0, 0, 0.7);
	}

	.missing {
		background: rgba(255, 255, 255, 0.5);
		color: rgba(0, 0, 0, 0.5);
	}

	.close {
		border-style: solid;
		border-color: var(--color-theme-2);
	}

	.exact {
		background: var(--color-theme-2);
		color: white;
	}

	.example {
		display: flex;
		justify-content: flex-start;
		margin: 1rem 0;
		gap: 0.2rem;
	}

	.example span {
		font-size: 1.4rem;
	}

	p span {
		position: relative;
		border-width: 1px;
		border-radius: 1px;
		font-size: 0.4em;
		transform: scale(2) translate(0, -10%);
		margin: 0 1em;
	}
</style>
