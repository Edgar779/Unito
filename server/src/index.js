import http     from 'http';
import mongoose from 'mongoose';

import app from './app.js';
import config from './env';

import mainConfig from './env';

// connect to mongo db
mongoose.connect(mainConfig.MONGO_URL, { useNewUrlParser: true }, async () => {
  if (mainConfig.NODE_ENV !== 'test') console.log('Mongodb connected on port 27017');
});


// listen on port
const server = http.createServer(app).listen(config.PORT, () => {
  if (mainConfig.NODE_ENV !== 'test') console.log('Server started on port ' + config.PORT + ` in ${config.NODE_ENV} mode`);
});

export default server;