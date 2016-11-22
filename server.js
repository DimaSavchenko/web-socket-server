var WebSocketServer = require('ws').Server,
  port = Number(process.env.PORT || 8000),
  wss = new WebSocketServer({port: port});

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log(message);
  });

  setInterval(function () {
    if (ws.readyState == 1) {
      ws.send('data from server');
    }
  }, 2000);

  console.log('connection');
});