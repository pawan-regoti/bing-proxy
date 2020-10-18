import http from 'http'
import httpProxy from 'http-proxy'

const BING_URL = 'https://www.bing.com/HPImageArchive.aspx'
//
// Create a proxy server with custom application logic
//
const proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, { changeOrigin: true, target: BING_URL });
});

console.log("listening on port 3030")
server.listen(3030);