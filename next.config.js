const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};


const nextConfig = {
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig