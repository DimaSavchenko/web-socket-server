var WebSocketServer = require('ws').Server,
    port = Number(process.env.PORT || 8000),
    wss = new WebSocketServer({port: port}),
    i;

wss.on('connection', function (ws) {

    i = 1;

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

    setInterval(function () {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify({
                value: getChartData(),
                type: 'chart'
            }));
        }
    }, 1000);

    console.log('connection');
});

var rangeRandom = function (min, max) {
    return Math.random() * (max - min) + min;
};

var getTableData = function () {

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
            "b": b
        }
    }
};

var getChartData = function () {

    var a = 100 + Math.floor(rangeRandom(-10, 10));
    var b = 100 + Math.floor(rangeRandom(-10, 10));

    return {
        "userid": "abc",
        "resize": true,
        "error": false,
        "errorMessage": "",
        "data": {
            "y": ++i,
            "a": a,
            "b": b
        }
        ,
        "xkey": "y",
        "ykeys": [
            "a",
            "b"
        ],
        "labels": [
            "Series A",
            "Series B"
        ],
        "lineColors": [
            "#88C4EE",
            "#ccc"
        ]
    }
}