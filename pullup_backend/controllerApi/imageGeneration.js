const logEvents = require('../middleware/logEvents');
const openAi = require('../utils/openAi')

async function imageGenerate(apiKey,prompt){
    const openai = openAi(apiKey);

    try{
        const response = await openai.createImage({
            prompt: prompt,
            n: 3,
            size: "512x512",
        });
        image_urls = response.data.data
        return JSON.stringify(image_urls);
    }
    catch(err){
        const message = err.response.data.error.message
        const statusCode = err.response.status
        return JSON.stringify({message,statusCode});
    }
  
}

module.exports = imageGenerate;