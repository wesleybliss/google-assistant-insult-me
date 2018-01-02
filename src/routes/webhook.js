'use strict'

const app = require('../app')
const log = require('../utils/logger')
const { insults } = require('../../public/insults')

app.post('/webhook', (req, res) => {
    
    log.info('@todo POST /webhook')
    
    /*require('fs').writeFileSync(
        require('path').join(__dirname, '../../logs/sample-payload.log'),
        JSON.stringify(req.body, null, 4),
        'utf8'
    )*/
    
    //res.send(200)
    
    const insult = insults[Math.floor(Math.random() * insults.length)]
    
    const data = {
        speech: insult,
        displayText: insult,
        data: {},
        contextOut: [],
        source: 'Bot'
    }
    
    log.info('Sending back', JSON.stringify(data, null, 4))
    
    res.send(200, data)
    
})
