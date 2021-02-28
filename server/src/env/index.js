const env = process.env.NODE_ENV || 'development';
const mainConfig = require(`./${env}`).default;


export default mainConfig;