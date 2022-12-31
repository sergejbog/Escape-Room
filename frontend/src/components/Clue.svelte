<script lang="ts">
    export let word: string;
    export let number: string;
    export let newSite: string;
</script>

<div class="main fixed">    
    <main class="flex relative justify-center items-center rounded-full p-20 w-36 h-36 bg-blue-100">
        <h1 class="text-[60px] text-blue-800 text-center">{word}</h1>
        <p class="absolute top-3 italic font-bold text-blue-800">{number}</p>
    </main>
    <div class="text-center mt-5">
        <a href={newSite} class="text-center text-white underline">Next -></a>
    </div>
    
</div>


<style>
    .main {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    main {
        border-radius: 9999px;
    }


</style>