const openAi = require("../utils/openAi")

async function textCompletion(apiKey, userPrompt, userToken,){ 
    const openai = openAi(apiKey);
    try{
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:  userPrompt,
            temperature: 0  ,
            max_tokens: userToken,
            top_p : 1
        })
        const data = response.data.choices[0].text
        console.log(data,response.data);
        return data;
    } catch(err){
        const message = err.response.data.error.message
        const statusCode = err.response.status
        return JSON.stringify({message,statusCode});
    }
}

module.exports = textCompletion;
