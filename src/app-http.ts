import fs from 'fs'
import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlFile)
        return
    }
    if(req.url?.includes('.css')) {
        const cssFile = fs.readFileSync('./public/css/styles.css', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(cssFile)
        return
    }
    if(req.url?.endsWith('.js')) {
        const jsFile = fs.readFileSync('./public/js/app.js', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.end(jsFile)
        return

    }
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found')

})

server.listen(8080, () => console.log('server running on port 8080'))