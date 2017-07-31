import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path'

export default {
  setup: baseDir => {
    return http.createServer((request, response) => {
      try {
        const requestUrl = url.parse(request.url)
        // need to use path.normalize so people can't access directories underneath baseDirectory
        const fsPath = baseDir + path.normalize(requestUrl.pathname)
        const fileStream = fs.createReadStream(fsPath)

        response.writeHead(200)
        fileStream.pipe(response)
        fileStream.on('error', e => {
          response.writeHead(404) // assume the file doesn't exist
          response.end()
        })
      } catch (e) {
        response.writeHead(500)
        response.end()
        console.log(e.stack)
      }
    })
  },
  start: port => {
    this.server.listen(port)
      .on('listening', () => console.log('Server is listening on', port))
      .on('error', (e) => console.log('Error starting server:', e))
  },
  stop: () => {
    this.server
      .close()
      .on('close', () => console.log('Server stopped'))
      .on('error', (e) => console.log('Error stopping server:', e))
  }
}
