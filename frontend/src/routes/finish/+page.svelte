<script>
	import Clue from "../../components/Clue.svelte";

</script>
<div>
    <h1 class="text-white mb-10 fancy">You are win</h1>
    
    <p class="text-white">Allign the letters in the following order: <br><span class="font-bold text-lg">11 15 31 14 19 0</span>  <br> The package is in front of the location. </p>
    <a class="text-white underline font-bold" href="https://ibb.co/56gtWSW">Hint</a>
</div>
<Clue word="DE" number="15" newSite="/finish" showNext={false}  />

<style>
    div {
        position: fixed;
        top: 20px;
        left: 50%;
        width: 90vw;
        transform: translate(-50%, 0);
    }

    .fancy {
  position: relative;
  white-space: nowrap;
  
}

.fancy::after {
    --deco-height: 0.3125em;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--deco-height) * -0.625);
    height: var(--deco-height);
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%2300FDCF' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: auto 100%;
    background-repeat: round;
    background-position: 0em;
}
</style>