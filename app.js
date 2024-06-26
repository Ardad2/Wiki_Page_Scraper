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


            const contentTableItems = [...page.matchAll(/<div class="vector-toc-text">(.*?)<\/div>/gm).map(match => match[1])]           

            const contentTableItems2 = [...page.matchAll(/<span class="vector-toc-numb">(.*?)<\/span>/gm).map(match => match[1])] 


            const contentTableItems3 = [...page.matchAll(/<a class="vector-toc-link" href="\B#([A-Za-z0-9]{2,})(?![~!@#$%^&*()=+_`\-\|\/'\[\]\{\}]|[?.,]*\w)"><div class="vector-toc-text"><span class="vector-toc-numb">\d<\/span><span>[A-Za-z0-9]+<\/span><\/div><\/a>/gm).map(match => match[1])] 



		//	/<div class="vector-toc-text"><span class="vector-toc-numb">1<\/span><span>History<\/span><\/div>


/*            <div class="vector-toc-text">
				<span class="vector-toc-numb">2</span>
				<span>Organization and administration</span>
			</div> */



           // const contentTableItems = [...page.matchAll(/ <a href="()">(.*?) <\/a>/gm)].map(match => match[1])

            console.log("Content Table Items: ")

            console.log(contentTableItems);
            //console.log(contentTableItems2);
            console.log(contentTableItems3);

            const headings = [...page.matchAll(/<span class="mw-headline" id="(.*?)">(.*?)<\/span>/gm).map(match => match[1])]
            console.log("All the headings: ");

            //console.log(headings);




        })
    }
)

request.on('error', error => {
    console.error(error)
})

request.end()