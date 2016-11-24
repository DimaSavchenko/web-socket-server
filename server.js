var WebSocketServer = require('ws').Server,
  port = Number(process.env.PORT || 8000),
  wss = new WebSocketServer({port: port});

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log(message);
  });

  setInterval(function () {
    if (ws.readyState == 1) {
      ws.send(JSON.stringify({
        value: getTableData(),
        type: 'table'
      }));
    }
  }, 1000);

  console.log('connection');
});

var getTableData = function () {
  var rangeRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  var a = 100 + Math.floor(rangeRandom(-10, 10));
  var b = 100 + Math.floor(rangeRandom(-10, 10));

  return {
    "userId": "abc",
    "error": false,
    "errorMessage": "",
    "data": {
      "id": "15",
      "name": "Tomas",
      "info": {
        "type": "JPEG",
        "dimensions": "1800x1420"
      },
      "y": "2006",
      "a": a,
      "b": b,
    }
  }
};