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
        //   console.log(buffer)
        })

        result.on('end', () => {
            //console.log("The HTML DATA for this page: ");
            //console.log(page)

            //const contentTableItems = [...page.matchAll(/ <div class=“vector-toc-text”>(.*?)<\/div>/gm)].map(match => match[1])

            //const contentTableItems = [...page.matchAll(/ <span class="vector-toc-numb">(.*?) <\/span>/gm)].map(match => match[1]) 

            //const contentTableItems = [...page.matchAll(/ <span class="vector-toc-numb">(.*?) <\/span>/gm)].map(match => match[1])

            const contentTableItems = [...page.matchAll(/ <h1>(.*?) <\/h1>/gm)]

           // const contentTableItems = [...page.matchAll(/ <a href="()">(.*?) <\/a>/gm)].map(match => match[1])

            console.log(contentTableItems);
        })
    }
)

request.on('error', error => {
    console.error(error)
})

request.end()