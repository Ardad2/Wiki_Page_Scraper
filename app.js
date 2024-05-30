import https from 'node:https'

const request = https.request({
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Arizona_State_University',
    method: 'GET'
}, result => {
        let page = ''

        result.on('data', dataBuffer => {
            const buffer = dataBuffer.toString()
            page += buffer
        })

        result.on('end', () => {
            console.log("The HTML DATA: ");
            console.log(page)
        })
    }
)

request.on('error', error => {
    console.error(error)
})

request.end()