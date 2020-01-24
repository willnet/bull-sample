var process = require('process')

module.exports = function(job){
  console.log('queue anothor file pid:' + process.pid)
  return Promise.resolve(true)
}