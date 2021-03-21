var compressor = require('node-minify');
 
// Using Google Closure Compiler
compressor.minify({
  compressor: 'gcc',
  input: './controller_1.0.1.js',
  output: './controller_1.0.1.min.js',
  callback: function(err, min) {}
});