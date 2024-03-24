const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["lotusite.pl", "localhost:3000"]
    }
  }
}