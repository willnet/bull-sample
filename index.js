var Queue = require('bull');
var Queue1 = new Queue('thisfile')
var Queue2 = new Queue('anotherfile')
var process = require('process')
var path = require('path')

console.log('main pid:' + process.pid)

Queue1.process(function () {
  console.log('queue this file pid:' + process.pid)  
})

Queue2.process(path.resolve('./processor.js'))

Queue1.add({})
Queue2.add({})