<script>
	import Clue from "src/components/Clue.svelte";

</script>
<div>
    <h1 class="text-white mb-10 fancy">You are win</h1>
    <Clue word="DE" number="15" newSite="/finish" showNext={false}  />
    <p class="text-white">Allign the letters in the following order: <br><span class="font-bold text-lg">11 15 31 14 19 0</span>  <br> There you will find the QR code to the location. </p>
</div>

<style>
    div {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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