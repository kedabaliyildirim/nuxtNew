const express = require('express');
// create express instance
const app = express();

// API routes
const index = require('./Routes/index.js');


// Importing API routes
app.use(index);

// Export express app
module.exports = app;


// Start stand
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
  })
}
