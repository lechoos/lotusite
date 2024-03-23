const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["192.109.244.63", "localhost:3000"]
    }
  }
}