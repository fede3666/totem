const NodeMediaServer = require('node-media-server');

let config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 5443,
    allow_origin: '*'
  }
};

let nms = new NodeMediaServer(config);

nms.run();
