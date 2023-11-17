const openAi = require('../utils/openAi')

async function codeAi(apiKey,prompt,max_token){
    
    const openai = openAi(apiKey);
    const response = await openai.createCompletion({
        model:'code-davinci-002',
        prompt: prompt,
        max_tokens:max_token,
        temperature:0,
        top_p : 1
    })

    const responseData = response.data.choices[0].text
    console.log(responseData)

}

module.exports = codeAi;