const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
const jsonParser = bodyParser.json();
const port = 3000;

const configuration = new Configuration({
   apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function readAllLines(file) {
   var fs = require("fs");
   var array = fs.readFileSync(file);
   return array.toString();
}

function makeMessagePrompt(req) {
   let messagePrompt = "";
   for (let i = 0; i < req.body.prompt.length; i++) {
      let requestObj = req.body.prompt[i];
      messagePrompt += `${requestObj.from}: ${requestObj.message}\n`;
   }
   return messagePrompt;
}

async function makeChatBotPrompt(prompt) {
   prompt += "Gamemaster: ";
   let response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      best_of: 1,
      echo: true,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      max_tokens: 150,
      temperature: 0.3,
      top_p: 1,
      n: 1,
      stop: ["Player", "Gamemaster", "###", "\n\n"],
   });
   return response;
}

function prepareResponseString(str) {
   let responseString = str.data.choices[0].text.trim().split("\n");

   responseString = responseString[responseString.length - 1].replace("Gamemaster: ", "").trim();
   return responseString;
}

const initialPrompt = readAllLines("./data/prompt.txt");

app.post("/generate", jsonParser, async (req, res) => {
   let prompt = initialPrompt + "\n";
   let messagePrompt = makeMessagePrompt(req);
   let joinedPromptAndMessage = prompt + messagePrompt;
   let newMessageString = await makeChatBotPrompt(joinedPromptAndMessage);

   // console.log(newMessageString);

   let responseString = prepareResponseString(newMessageString);
   console.log(responseString);
   if (responseString.trim().toLowerCase().includes("grinch")) {
      let newPrompt = prompt + "\n \n Answer this following question without mentioning grinch\n".toUpperCase() + messagePrompt;
      console.log("---------------------");
      console.log(newPrompt);
      const response = await makeChatBotPrompt(newPrompt);
      responseString = prepareResponseString(response);
      console.log(responseString);
      console.log("---------------------");
   }
   res.send(responseString);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
