const { Configuration, OpenAIApi } = require("openai")

function openAi(apiKey){
    const configuration = new Configuration({
        apiKey:apiKey
    })

    const openAI = new OpenAIApi(configuration);
    return openAI
}

module.exports = openAi;
