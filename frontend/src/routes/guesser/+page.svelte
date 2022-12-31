<script>
// @ts-nocheck

    import { afterUpdate, tick } from 'svelte';

    let textAreaString = "";
    let element;

    let inputValue = '';
	let isItCorrect = false;
  let incorrectGuess = false;

	function doInput() {

		if (inputValue.trim().toLowerCase() === 'grinch') {
      incorrectGuess = false;
			isItCorrect = true;
		} else {
      incorrectGuess = true;
    }

    inputValue = "";
	}

afterUpdate(() => {
      console.log("afterUpdate");
      if(messagesArr) scrollToBottom(element);
});

$: if(messagesArr && element) {
      console.log("tick");
      scrollToBottom(element);
  }

async function getResponse(e) {
  if(e.pointerId == undefined && (e.key != "Enter" || e.shiftKey)) return;
  if(textAreaString.trim() == "") return;

  console.log(textAreaString);
  messagesArr = [...messagesArr, {"from": "Player", message: textAreaString}]

  textAreaString = "";

  const response = await fetch('http://nemasneg.tk:3000/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: messagesArr })
  })
  let responseAI = await response.text();
  messagesArr = [...messagesArr, {"from": "Gamemaster", message: responseAI}];
}

const scrollToBottom = async (node) => {
  node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
}; 

let messagesArr = [
]
</script>

<main>
    <div class="chat-area">
        <div class="chat-area-heading">
          <div class="chat-area-heading-text p-5 relative top-2 text-center">
            <p>Find the person/character. Ask questions and try to guess it. Enter your guess in the form below.</p>
          </div>
        </div>
        <div class="chat-area-wave">
        </div>
        <div bind:this={element} class="chat-area-messages">
          {#each messagesArr as message (message)}
            {#if message.from == "Gamemaster"}
              <div class="chat-area-message chat-area-message-ai">
                <p>{message.message}</p>
              </div>
            {:else}
              <div class="chat-area-message chat-area-message-human">
                <p>{message.message}</p>
              </div>
            {/if}
          {/each}
        </div>
        <div class="chat-area-input">
          <input type="text" placeholder="Enter text here..." on:keypress={getResponse} bind:value={textAreaString}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" on:click={getResponse} xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
            <path style="fill:#9BFCFF;" d="M1.398,431.634l21.593-89.001c3.063-12.622,11.283-23.562,22.554-30.015l83.684-47.915
              c6.723-3.849,6.738-13.546,0-17.403l-83.685-47.915c-11.271-6.453-19.491-17.392-22.554-30.014L1.398,80.368
              C-7.908,42.012,30.961,9.702,66.967,25.834l416.96,186.83c37.455,16.782,37.407,69.913,0.001,86.675L66.967,486.168
              C30.933,502.312-7.892,469.921,1.398,431.634z"/>
            <path style="fill:#83C9FF;" d="M483.927,212.665L256.011,110.541v290.923L483.929,299.34
              C521.334,282.578,521.383,229.446,483.927,212.665z"/>
            <path style="fill:#2586FD;" d="M186.997,329.76c-4.231-9.44-0.006-20.523,9.434-24.752l109.37-49.006l-109.37-49.006
              c-9.44-4.229-13.665-15.312-9.434-24.752c4.229-9.44,15.309-13.666,24.752-9.434l147.519,66.1c14.727,6.598,14.739,27.583,0,34.186
              l-147.519,66.1C202.311,343.423,191.229,339.205,186.997,329.76z"/>
            <path style="fill:#3A4DE2;" d="M359.268,238.908L256.01,192.64v41.05l49.791,22.311l-49.791,22.311v41.05l103.258-46.268
              C374.006,266.491,373.995,245.507,359.268,238.908z"/>
          </svg>
        </div>
    </div>
    <form>
		<input class="guess" bind:value={inputValue} placeholder="Enter your guess" on:change={doInput} type="text" />
	  </form>
    {#if isItCorrect}
		<div class="m-auto mt-5 text-center">
			<a href="/finish" class="text-white underline">Next -></a>
		</div>
	  {/if}
    {#if incorrectGuess}
    <div class="m-auto mt-5 text-center">
      <p class="text-yellow-500">Incorrect guess</p>
    </div>
  {/if}
  
</main>


  <style>
    .chat-area {
      width: 95vw;
      height: 60vh;

      margin-bottom: 20px;
      border-radius: 12px;
      background-color: #fefefe;
      font-family: 'Source Sans Pro', sans-serif;
    }

    form {
      display: flex;
      justify-content: center;
    }

    main {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        /* width: 300px; */
        height: 500px;
    }

    .guess {
		width: 80%;
		height: 50px;
		border: none;
		border-radius: 4px;
		padding: 0 20px;
		font-size: 16px;
		letter-spacing: 5px;
    text-align: center;
    }
  
    .chat-area-heading {
      width: 100%;
      height: 15%;
      background: linear-gradient(90deg, #14018c 35%, #0b004e 100%);
      border-radius: 9px 9px 0 0;
      display: flex;
      align-items: center;
      padding: 10px;
    }
  
    .chat-area-heading-text p {
      font-size: 12px;
      font-weight: 400;
      color: white;
      margin: 0;
    }

  
    .chat-area-wave {
      align-items: center;
      clip-path: polygon(100% 0%, -1% 0% , -1% 74.17%, 2.00% 75.23%, 4.00% 76.15%, 6.00% 76.93%, 8.00% 77.54%, 10.00% 77.99%, 12.00% 78.25%, 14.00% 78.33%, 16.00% 78.23%, 18.00% 77.95%, 20.00% 77.48%, 22.00% 76.85%, 24.00% 76.06%, 26.00% 75.12%, 28.00% 74.04%, 30.00% 72.85%, 32.00% 71.56%, 34.00% 70.19%, 36.00% 68.77%, 38.00% 67.32%, 40.00% 65.85%, 42.00% 64.40%, 44.00% 62.98%, 46.00% 61.63%, 48.00% 60.35%, 50.00% 59.17%, 52.00% 58.11%, 54.00% 57.18%, 56.00% 56.40%, 58.00% 55.79%, 60.00% 55.35%, 62.00% 55.08%, 64.00% 55.00%, 66.00% 55.10%, 68.00% 55.39%, 70.00% 55.85%, 72.00% 56.48%, 74.00% 57.28%, 76.00% 58.22%, 78.00% 59.29%, 80.00% 60.48%, 82.00% 61.77%, 84.00% 63.14%, 86.00% 64.56%, 88.00% 66.02%, 90.00% 67.48%, 92.00% 68.93%, 94.00% 70.35%, 96.00% 71.71%, 100.00% 72.99%, 101.00% 74.17%);    
      background: linear-gradient(90deg, #14018c 35%, #0b004e 100%);
      height: 15%;
      color: white;
      width: 100%;
      padding-bottom: 20px;
      padding-left: 15px;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      position: relative;
      top: -2px;
    }
  
    .chat-area-messages {
      width: 100%;
      height: 55%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      overflow: auto;
      padding: 10px;
      padding-top: 0;
      display: flex;
      flex-direction: column;
    }
  
    .chat-area-input {
      width: 100%;
      height: 15%;
      border-radius: 0 0 9px 9px;
      border-top: 0.5px solid rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      padding: 10px;
    }
  
    .chat-area-input input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      padding: 10px;
    }
  
    .chat-area-input svg {
      height: 20px;
      width: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
  
    .chat-area-message {
      max-width: 60%;
      margin-bottom: 10px;
    }
  
    .chat-area-message-ai {
      align-self: flex-start;
      background: rgb(39,46,220);
      background: linear-gradient(90deg, rgba(39,46,220,1) 35%, rgba(15,142,241,1) 100%);
      color: white;
      padding: 10px;
      border-radius: 10px 10px 0 10px;
    }
  
    .chat-area-message-human {
      align-self: flex-end;
      background: #f2f2f2;
      color: black;
      padding: 10px;
      border-radius: 10px 10px 10px 0;
    }
  </style>
  
  