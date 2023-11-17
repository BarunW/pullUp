const moment = require('moment');
const shortId = require('shortid')
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const logEvents = async(msg,fileName) =>{
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const logData = `${shortId.generate()} ${msg} ${dateTime} ` + "\n"
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',fileName), logData)
    }catch(err){
        console.log(err);
    }
}

module.exports = logEvents
