const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    filename: 'bundle.js',   // Output bundle file
    path: path.resolve(__dirname, 'dist')  // Output directory
  },
  mode: 'development',  // Change to 'production' for optimized builds
};
